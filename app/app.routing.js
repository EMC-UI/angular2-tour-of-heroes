"use strict";
var router_1 = require('@angular/router');
// import project components
var dashboard_component_1 = require('./dashboard.component');
var comics_dashboard_component_1 = require('./comics-dashboard.component');
var comics_component_1 = require('./comics.component');
var comic_detail_component_1 = require('./comic-detail.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'comics-dashboard',
        component: comics_dashboard_component_1.ComicsDashboardComponent
    },
    {
        path: 'hero-detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'comic-detail/:id',
        component: comic_detail_component_1.ComicDetailComponent
    },
    {
        path: 'comics',
        component: comics_component_1.ComicsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map