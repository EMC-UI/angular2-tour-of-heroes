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
var Rx_1 = require('rxjs/Rx');
var md5_1 = require('ts-md5/dist/md5');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.baseUrl = 'http://gateway.marvel.com'; // URL to web api
        this.publickey = 'a209df55a8f47a76b87abf209cab27ec'; // api public key (limited to 3000 per day)
        this.privatekey = 'b5b63f833293013997ff21bd9f2c1c33dc569987'; //api private key
    }
    HeroService.prototype.getHeroes = function () {
        var ts = Date.now();
        var heroes$ = this.http
            .get(this.baseUrl + "/v1/public/characters?ts=" + ts.toString() + "&apikey=" + this.publickey + "&hash=" + hashkey(ts.toString(), this.publickey, this.privatekey), { headers: this.getHeaders() })
            .map(mapHeroes)
            .catch(handleError);
        return heroes$;
    };
    HeroService.prototype.getHero = function (id) {
        var ts = Date.now();
        var hero$ = this.http
            .get(this.baseUrl + "/v1/public/characters/" + id + "?ts=" + ts.toString() + "&apikey=" + this.publickey + "&hash=" + hashkey(ts.toString(), this.publickey, this.privatekey), { headers: this.getHeaders() })
            .map(mapHero)
            .catch(handleError);
        return hero$;
    };
    HeroService.prototype.search = function (term) {
        var ts = Date.now();
        var heroes$ = this.http
            .get(this.baseUrl + "/v1/public/characters?nameStartsWith=" + term + "&ts=" + ts.toString() + "&apikey=" + this.publickey + "&hash=" + hashkey(ts.toString(), this.publickey, this.privatekey), { headers: this.getHeaders() })
            .map(mapHeroes)
            .catch(handleError);
        return heroes$;
    };
    HeroService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
function mapHeroes(response) {
    // The response of the API has a results
    // property with the actual results
    return response.json().data.results.map(toHero);
}
function mapHero(response) {
    // toHero looks just like in the previous example
    // take the first hero found in the returned results array
    return toHero(response.json().data.results[0]);
}
function toHero(r) {
    var hero = ({
        id: r.id,
        name: r.name,
        description: r.description,
    });
    console.log('Parsed hero:', hero);
    return hero;
}
// this could also be a private method of the component class
function handleError(error) {
    // log error
    // could be something more sophisticated
    var errorMsg = error.message || "Yikes! There was was a problem with the Marvel API and we couldn't retrieve your data!";
    console.error(errorMsg);
    // throw an application level error
    return Rx_1.Observable.throw(errorMsg);
}
function hashkey(timestamp, publickey, privatekey) {
    var _string = timestamp + privatekey + publickey;
    console.log('hash input: ', _string);
    var _hash = md5_1.Md5.hashStr(_string);
    console.log('hash output: ', _hash.toString());
    return _hash.toString();
}
//# sourceMappingURL=hero.service.js.map