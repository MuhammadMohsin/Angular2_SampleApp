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
var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "\n  <form class=\"form-container\">\n      <img src=\"app/images/logo.jpg\" alt=\"logo\" class=\"img-responsive\">\n  \n      <label>Email:<br />\n          <input type=\"email\" name=\"userEmail\" class=\"form-control\" />\n      </label> <br />\n      \n      <label>Password:<br />\n          <input type=\"password\" name=\"userPass\" class=\"form-control\"/>\n      </label> <br />\n      <br />\n      <input type=\"submit\" [routerLink]=\"['/dashboard']\" class=\"btn btn-block btn-primary\" value=\"Login\">\n  </form>",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map