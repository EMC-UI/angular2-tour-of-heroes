import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { ComicsComponent }      from './comics.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { ComicsDashboardComponent }   from './comics-dashboard.component';
import { ComicsGridComponent }   from './comics-grid.component';
import { ComicDetailComponent }  from './comic-detail.component';
import { HeroesGridComponent }   from './heroes-grid.component';
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
        ComicsComponent,
        HeroesComponent,
        DashboardComponent,
        ComicsDashboardComponent,
        ComicsGridComponent,
        ComicDetailComponent,
        HeroesGridComponent,
        HeroDetailComponent,
        HeroSearchComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
