import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Comic } from './comic';
import { ComicService } from './comic.service';

@Component({
    selector: 'my-comic-dashboard',
    templateUrl: 'app/comics-grid.component.html',
    styleUrls: ['app/comics-grid.component.css'],
    providers: [ComicService]
})

export class ComicsDashboardComponent implements OnInit {
    comics: Comic[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private router: Router,
        private comicService: ComicService) {
    }

    ngOnInit() {
        this.comicService
          .getComics()
          .subscribe(
             /* happy path */ p => this.comics = p.slice(1, 10), //get the first 4
             /* error path */ e => this.errorMessage = e,
             /* onComplete */ () => this.isLoading = false);
    }

    gotoDetail(comic: Comic) {
        let link = ['/comic-detail', comic.id];
        this.router.navigate(link);
    }
}
