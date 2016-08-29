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
var ComicsDashboardComponent = (function () {
    function ComicsDashboardComponent(router, ComicService) {
        this.router = router;
        this.ComicService = ComicService;
        this.comics = [];
        this.errorMessage = '';
        this.isLoading = true;
    }
    ComicsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ComicService
            .getComics()
            .subscribe(
        /* happy path */ function (p) { return _this.comics = p.slice(1, 10); }, //get the first 4
        /* error path */ function (//get the first 4
            e) { return _this.errorMessage = e; }, 
        /* onComplete */ function () { return _this.isLoading = false; });
    };
    ComicsDashboardComponent.prototype.gotoDetail = function (comic) {
        var link = ['/comic-details', comic.id];
        this.router.navigate(link);
    };
    ComicsDashboardComponent = __decorate([
        core_1.Component({
            selector: 'comic-dashboard',
            templateUrl: 'app/comicsGrid.component.html',
            styleUrls: ['app/comicsGrid.component.css'],
            providers: [comic_service_1.ComicService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, comic_service_1.ComicService])
    ], ComicsDashboardComponent);
    return ComicsDashboardComponent;
}());
exports.ComicsDashboardComponent = ComicsDashboardComponent;
//# sourceMappingURL=comicsDashboard.component.js.map