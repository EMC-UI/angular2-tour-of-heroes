import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css'],
    providers: [HeroService]
})

export class HeroDetailComponent implements OnInit, OnDestroy {
    @Output() close = new EventEmitter();
    hero: Hero;    
    error: any;
    sub: any;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting person with id: ', id);
          this.heroService
            .getHero(id)
            .subscribe(p => this.hero = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }
}
