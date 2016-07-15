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
var dashboardComponent = (function () {
    function dashboardComponent() {
        this.tweetMsg = "";
        this.dataSet = [];
        this.dataSet = [
            { title: "Tweet 1", desc: "This is description of Tweet 1", timestamp: new Date("1/12/15").toLocaleString() },
            { title: "Tweet 2", desc: "This is description of Tweet 2", timestamp: new Date("2/1/15").toLocaleString() },
            { title: "Tweet 3", desc: "This is description of Tweet 3", timestamp: new Date("3/30/15").toLocaleString() },
            { title: "Tweet 4", desc: "This is description of Tweet 4", timestamp: new Date("4/5/15").toLocaleString() },
            { title: "Tweet 5", desc: "This is description of Tweet 5", timestamp: new Date("5/19/15").toLocaleString() },
            { title: "Tweet 6", desc: "This is description of Tweet 6", timestamp: new Date("6/21/15").toLocaleString() },
        ];
        this.showCompose = false;
        this.dataSet.reverse();
    }
    dashboardComponent.prototype.showComposeTweet = function () {
        this.showCompose = !this.showCompose;
    };
    dashboardComponent.prototype.postTweet = function () {
        console.log("form submited:" + this.tweetMsg);
        this.dataSet.unshift({
            title: "Tweet " + (this.dataSet.length + 1),
            desc: this.tweetMsg,
            timestamp: new Date().toLocaleString()
        });
        this.tweetMsg = "";
        this.showCompose = false;
    };
    dashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/components/dashboard/template.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], dashboardComponent);
    return dashboardComponent;
}());
exports.dashboardComponent = dashboardComponent;
//# sourceMappingURL=dashboard.component.js.map