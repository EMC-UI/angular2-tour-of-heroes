import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Comic }                from './comic';
import { ComicService }         from './comic.service';

@Component({
    selector: 'my-comics',
    templateUrl: 'app/comics.component.html',
    styleUrls: ['app/comics.component.css'],
    providers: [ComicService]

})
export class ComicsComponent implements OnInit {
    comics: Comic[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;
    selectedComic: Comic;

    constructor(
        private router: Router,
        private comicService: ComicService) { }

    ngOnInit() {
        this.comicService
        .getComics()
        .subscribe(
            /* happy path */ p => this.comics = p,
            /* error path */ e => this.errorMessage = e,
            /* onComplete */ () => this.isLoading = false);
    }

    onSelect(comic: Comic) {
        this.selectedComic = comic;
        this.router.navigate(['/comic-detail', this.selectedComic.id]);
    }

}
