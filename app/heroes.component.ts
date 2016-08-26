import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Hero }                from './hero';
import { HeroService }         from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    providers: [HeroService]

})
export class HeroesComponent implements OnInit {
    heroes: Hero[] = [];
    errorMessage: string = '';
    isLoading: boolean = true;
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit() {
        this.heroService
        .getHeroes()
        .subscribe(
            /* happy path */ p => this.heroes = p,
            /* error path */ e => this.errorMessage = e,
            /* onComplete */ () => this.isLoading = false);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
