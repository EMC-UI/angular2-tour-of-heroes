import { Routes, RouterModule } from '@angular/router';
// import project components
import { DashboardComponent }  from './dashboard.component';
import { ComicsDashboardComponent }  from './comics-dashboard.component';
import { ComicsComponent }     from './comics.component';
import { ComicDetailComponent } from './comic-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'comics-dashboard',
        component: ComicsDashboardComponent
    },
    {
        path: 'hero-detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'comic-detail/:id',
        component: ComicDetailComponent
    },
    {
        path: 'comics',
        component: ComicsComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
