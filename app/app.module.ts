import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { ComicsGridComponent }   from './comicsGrid.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

import { HeroService }  from './hero.service';
import { ComicService }  from './comic.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        ComicsGridComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
