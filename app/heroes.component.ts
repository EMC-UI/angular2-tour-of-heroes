import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }                from './hero';
import { HeroService }         from './hero.service';
@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes() {
        this.heroService
            .getHeroes()
            .then(heroes => this.heroes = heroes)
            .catch(error => this.error = error);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
