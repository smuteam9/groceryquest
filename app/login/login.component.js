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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const token_service_1 = require('./../services/token.service');
let LoginComponent = class LoginComponent {
    constructor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
        this.status = 200;
        this.isValid = true;
    }
    login(username, password) {
        this.response = this.tokenService.login(username, password)
            .then(x => {
            this.token = x.token;
            this.status = 200;
            this.router.navigateByUrl('profile');
        }, (err) => {
            this.status = err.status;
            this.isValid = false;
        });
    }
};
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './app/login/login.html',
        styleUrls: ['./app/login/login.css']
    }), 
    __metadata('design:paramtypes', [token_service_1.TokenService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map