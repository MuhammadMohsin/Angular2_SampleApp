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
var dashboardComponent = (function () {
    function dashboardComponent() {
        this.dataSet = [];
        this.dataSet = [
            { title: "Tweet 1", desc: "This is description of Tweet 1" },
            { title: "Tweet 2", desc: "This is description of Tweet 2" },
            { title: "Tweet 3", desc: "This is description of Tweet 3" },
            { title: "Tweet 4", desc: "This is description of Tweet 4" },
            { title: "Tweet 5", desc: "This is description of Tweet 5" },
            { title: "Tweet 1", desc: "This is description of Tweet 6" },
        ];
    }
    dashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/components/dashboard/template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], dashboardComponent);
    return dashboardComponent;
}());
exports.dashboardComponent = dashboardComponent;
//# sourceMappingURL=dashboard.component.js.map