import { Routes, RouterModule } from '@angular/router';
// import project components
import { DashboardComponent }  from './dashboard.component';
import { ComicsDashboardComponent }  from './comicsDashboard.component';
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
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'comics',
        component: ComicsDashboardComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
