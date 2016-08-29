import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Comic } from './comic';
import { ComicService } from './comic.service';

@Component({
    selector: 'comic-dashboard',
    templateUrl: 'app/comicsGrid.component.html',
    styleUrls: ['app/comicsGrid.component.css'],
    providers: [ComicService]
})

export class ComicsDashboardComponent implements OnInit {
    comics: Comic[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private router: Router,
        private ComicService: ComicService) {
    }

    ngOnInit() {
        this.ComicService
          .getComics()
          .subscribe(
             /* happy path */ p => this.comics = p.slice(1, 10), //get the first 4
             /* error path */ e => this.errorMessage = e,
             /* onComplete */ () => this.isLoading = false);
    }

    gotoDetail(comic: Comic) {
        let link = ['/comic-details', comic.id];
        this.router.navigate(link);
    }
}
