import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Md5} from 'ts-md5/dist/md5';
import { Comic } from './comic';

@Injectable()
export class ComicService {
    private baseUrl = 'http://gateway.marvel.com';  // URL to web api
    private publickey = 'a209df55a8f47a76b87abf209cab27ec'; // api public key (limited to 3000 per day)
    private privatekey = 'b5b63f833293013997ff21bd9f2c1c33dc569987'; //api private key

    constructor(private http: Http) {
    }

    getComics(): Observable<Comic[]> {
        let ts = Date.now();

        let comics$ = this.http
          .get(`${this.baseUrl}/v1/public/comics?ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
          .map(mapComics)
          .catch(handleError);
          return comics$;
    }

    getComic(id: number): Observable<Comic> {
        let ts = Date.now();

        let comic$ = this.http
          .get(`${this.baseUrl}/v1/public/comics/${id}?ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
          .map(mapComic)
          .catch(handleError);
          return comic$;
    }

    getComicsForHero(id: number): Observable<Comic[]> {
        let ts = Date.now();

        let comics$ = this.http
          .get(`${this.baseUrl}/v1/public/characters/${id}/comics?orderBy=-onsaleDate&ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
          .map(mapComics)
          .catch(handleError);
          return comics$;
    }

    search(term: string): Observable<Comic[]> {
        let ts = Date.now();

        let comics$ = this.http
        .get(`${this.baseUrl}/v1/public/comic?nameStartsWith=${term}&ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
        .map(mapComics)
        .catch(handleError);
        return comics$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      }
}

function mapComics(response:Response): Comic[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().data.results.map(toComic);
}

function mapComic(response:Response): Comic{
   // toHero looks just like in the previous example
   // take the first hero found in the returned results array
   return toComic(response.json().data.results[0]);
}

function toComic(r:any): Comic{
    console.log('data: ', r);

    if(! r.description){
        r.description = null;
    }

    let comic = <Comic>( r
        // id: r.id,
        // title: r.title,
        // issueNumber: r.issueNumber,
        // description: r.description,
        // thumbnail: {
        //     extension: r.thumbnail.extension,
        //     path: r.thumbnail.path
        // },
        // images: r.images
    );

    console.log('Parsed comic:', comic);
    return comic;
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sophisticated
  let errorMsg = error.message || `Yikes! There was was a problem with the Marvel API and we couldn't retrieve your comic data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

function hashkey(timestamp: string , publickey: string, privatekey: string) :string {
    var _string = timestamp + privatekey + publickey;
    console.log('hash input: ', _string);
    var _hash: any = Md5.hashStr( _string );
    console.log('hash output: ', _hash.toString());
    return _hash.toString();
}
