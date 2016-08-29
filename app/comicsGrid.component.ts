import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Comic } from './comic';
import { ComicService } from './comic.service';

@Component({
    selector: 'comic-grid',
    templateUrl: 'app/comicsGrid.component.html',
    styleUrls: ['app/comicsGrid.component.css'],
    providers: [ComicService]
})

export class ComicsGridComponent implements OnInit {
    @Input() heroId: number;
    comics: Comic[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;

    constructor(
        private router: Router,
        private ComicService: ComicService) {
    }

    ngOnInit() {
          let id = this.heroId;
          console.log('getting comics for hero with id: ', id);
        this.ComicService
          .getComicsForHero(id)
          .subscribe(
             /* happy path */ p => this.comics = p, //get the first 4
             /* error path */ e => this.errorMessage = e,
             /* onComplete */ () => this.isLoading = false);
    }

    gotoDetail(comic: Comic) {
        let link = ['/comic-details', comic.id];
        this.router.navigate(link);
    }
}
