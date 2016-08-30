"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var HeroesGridComponent = (function () {
    function HeroesGridComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    HeroesGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.comicId;
        console.log('getting heroes for comic with id: ', id);
        this.heroService
            .getHeroesForComic(id)
            .subscribe(
        /* happy path */ function (p) { return _this.heroes = p; }, //get the first 4
        /* error path */ function (//get the first 4
            e) { return _this.errorMessage = e; }, 
        /* onComplete */ function () { return _this.isLoading = false; });
    };
    HeroesGridComponent.prototype.gotoDetail = function (hero) {
        var link = ['/hero-detail', hero.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HeroesGridComponent.prototype, "comicId", void 0);
    HeroesGridComponent = __decorate([
        core_1.Component({
            selector: 'my-hero-grid',
            templateUrl: 'app/heroes-grid.component.html',
            styleUrls: ['app/heroes-grid.component.css'],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
    ], HeroesGridComponent);
    return HeroesGridComponent;
}());
exports.HeroesGridComponent = HeroesGridComponent;
//# sourceMappingURL=heroes-grid.component.js.map