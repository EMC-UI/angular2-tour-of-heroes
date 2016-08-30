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
var comic_service_1 = require('./comic.service');
var ComicsGridComponent = (function () {
    function ComicsGridComponent(router, comicService) {
        this.router = router;
        this.comicService = comicService;
        this.comics = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    ComicsGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.heroId;
        console.log('getting comics for hero with id: ', id);
        this.comicService
            .getComicsForHero(id)
            .subscribe(
        /* happy path */ function (p) { return _this.comics = p; }, //get the first 4
        /* error path */ function (//get the first 4
            e) { return _this.errorMessage = e; }, 
        /* onComplete */ function () { return _this.isLoading = false; });
    };
    ComicsGridComponent.prototype.gotoDetail = function (comic) {
        var link = ['/comic-detail', comic.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ComicsGridComponent.prototype, "heroId", void 0);
    ComicsGridComponent = __decorate([
        core_1.Component({
            selector: 'my-comic-grid',
            templateUrl: 'app/comics-grid.component.html',
            styleUrls: ['app/comics-grid.component.css'],
            providers: [comic_service_1.ComicService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, comic_service_1.ComicService])
    ], ComicsGridComponent);
    return ComicsGridComponent;
}());
exports.ComicsGridComponent = ComicsGridComponent;
//# sourceMappingURL=comics-grid.component.js.map