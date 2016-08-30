import { Injectable }    from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import {Md5} from 'ts-md5/dist/md5';
import { Hero } from './hero';

@Injectable()
export class HeroService {
    private baseUrl = 'http://gateway.marvel.com';  // URL to web api
    private publickey = 'a209df55a8f47a76b87abf209cab27ec'; // api public key (limited to 3000 per day)
    private privatekey = 'b5b63f833293013997ff21bd9f2c1c33dc569987'; //api private key

    constructor(private http: Http) {
    }

    getHeroes(): Observable<Hero[]> {
        let ts = Date.now();

        let heroes$ = this.http
          .get(`${this.baseUrl}/v1/public/characters?ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
          .map(mapHeroes)
          .catch(handleError);
          return heroes$;
    }

    getHero(id: number): Observable<Hero> {
        let ts = Date.now();

        let hero$ = this.http
          .get(`${this.baseUrl}/v1/public/characters/${id}?ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
          .map(mapHero)
          .catch(handleError);
          return hero$;
    }

    getHeroesForComic(id: number): Observable<Hero[]> {
        let ts = Date.now();

        let heroes$ = this.http
          .get(`${this.baseUrl}/v1/public/comics/${id}/characters?ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
          .map(mapHero)
          .catch(handleError);
          return heroes$;
    }

    search(term: string): Observable<Hero[]> {
        let ts = Date.now();

        let heroes$ = this.http
        .get(`${this.baseUrl}/v1/public/characters?nameStartsWith=${term}&ts=${ts.toString()}&apikey=${this.publickey}&hash=${hashkey(ts.toString(), this.publickey, this.privatekey)}`, {headers: this.getHeaders()})
        .map(mapHeroes)
        .catch(handleError);
        return heroes$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
      }
}

function mapHeroes(response:Response): Hero[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().data.results.map(toHero);
}

function mapHero(response:Response): Hero{
   // toHero looks just like in the previous example
   // take the first hero found in the returned results array
   return toHero(response.json().data.results[0]);
}

function toHero(r:any): Hero{
    console.log('data: ', r);

    let hero = <Hero>({
        id: r.id,
        name: r.name,
        description: r.description,
        thumbnail: {
            extension: r.thumbnail.extension,
            path: r.thumbnail.path
        }
    });

    console.log('Parsed hero:', hero);
    return hero;
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sophisticated
  let errorMsg = error.message || `Yikes! There was was a problem with the Marvel API and we couldn't retrieve your data!`
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
