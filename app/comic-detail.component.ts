import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Comic } from './comic';
import { ComicService } from './comic.service';

@Component({
    selector: 'my-comic-detail',
    templateUrl: 'app/comic-detail.component.html',
    styleUrls: ['app/comic-detail.component.css'],
    providers: [ComicService]
})

export class ComicDetailComponent implements OnInit, OnDestroy {
    @Output() close = new EventEmitter();
    comic: Comic;
    error: any;
    sub: any;

    constructor(private comicService: ComicService,
                private route: ActivatedRoute) {
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting Comic with id: ', id);
          this.comicService
            .getComic(id)
            .subscribe(p => this.comic = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}
