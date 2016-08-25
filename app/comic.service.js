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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ComicService = (function () {
    function ComicService(http) {
        this.http = http;
        this.comicUrl = 'app/comics'; // URL to web api
    }
    ComicService.prototype.getComics = function () {
        return this.http.get(this.comicUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ComicService.prototype.getComic = function (id) {
        return this.getComics()
            .then(function (Comics) { return Comics.find(function (Comic) { return Comic.id === id; }); });
    };
    ComicService.prototype.save = function (Comic) {
        if (Comic.id) {
            return this.put(Comic);
        }
        return this.post(Comic);
    };
    ComicService.prototype.delete = function (Comic) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.comicUrl + "/" + Comic.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    // Add new Comic
    ComicService.prototype.post = function (Comic) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.comicUrl, JSON.stringify(Comic), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Comic
    ComicService.prototype.put = function (Comic) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.comicUrl + "/" + Comic.id;
        return this.http
            .put(url, JSON.stringify(Comic), { headers: headers })
            .toPromise()
            .then(function () { return Comic; })
            .catch(this.handleError);
    };
    ComicService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ComicService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ComicService);
    return ComicService;
}());
exports.ComicService = ComicService;
//# sourceMappingURL=comic.service.js.map