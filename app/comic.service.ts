import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Comic } from './comic';

@Injectable()
export class ComicService {
    private comicUrl = 'app/comics';  // URL to web api
    constructor(private http: Http) { }

    getComics() {
        return this.http.get(this.comicUrl)
            .toPromise()
            .then(response => response.json().data as Comic[])
            .catch(this.handleError);
    }

    getComic(id: number) {
        return this.getComics()
            .then(Comics => Comics.find(Comic => Comic.id === id));
    }

    save(Comic: Comic): Promise<Comic> {
        if (Comic.id) {
            return this.put(Comic);
        }
        return this.post(Comic);
    }

    delete(Comic: Comic) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.comicUrl}/${Comic.id}`;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Comic
    private post(Comic: Comic): Promise<Comic> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.comicUrl, JSON.stringify(Comic), { headers: headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Comic
    private put(Comic: Comic) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.comicUrl}/${Comic.id}`;
        return this.http
            .put(url, JSON.stringify(Comic), { headers: headers })
            .toPromise()
            .then(() => Comic)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
