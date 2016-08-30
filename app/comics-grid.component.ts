import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Comic } from './comic';
import { ComicService } from './comic.service';

@Component({
    selector: 'my-comic-grid',
    templateUrl: 'app/comics-grid.component.html',
    styleUrls: ['app/comics-grid.component.css'],
    providers: [ComicService]
})

export class ComicsGridComponent implements OnInit {
    @Input() heroId: number;
    comics: Comic[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private router: Router,
        private comicService: ComicService) {
    }

    ngOnInit() {
          let id = this.heroId;
          console.log('getting comics for hero with id: ', id);
        this.comicService
          .getComicsForHero(id)
          .subscribe(
             /* happy path */ p => this.comics = p, //get the first 4
             /* error path */ e => this.errorMessage = e,
             /* onComplete */ () => this.isLoading = false);
    }

    gotoDetail(comic: Comic) {
        let link = ['/comic-detail', comic.id];
        this.router.navigate(link);
    }
}
