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
var ComicDetailComponent = (function () {
    function ComicDetailComponent(comicService, route) {
        this.comicService = comicService;
        this.route = route;
        this.close = new core_1.EventEmitter();
    }
    ComicDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = Number.parseInt(params['id']);
            console.log('getting Comic with id: ', id);
            _this.comicService
                .getComic(id)
                .subscribe(function (p) { return _this.comic = p; });
        });
    };
    ComicDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ComicDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ComicDetailComponent.prototype, "close", void 0);
    ComicDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-comic-detail',
            templateUrl: 'app/comic-detail.component.html',
            styleUrls: ['app/comic-detail.component.css'],
            providers: [comic_service_1.ComicService]
        }), 
        __metadata('design:paramtypes', [comic_service_1.ComicService, router_1.ActivatedRoute])
    ], ComicDetailComponent);
    return ComicDetailComponent;
}());
exports.ComicDetailComponent = ComicDetailComponent;
//# sourceMappingURL=comic-detail.component.js.map