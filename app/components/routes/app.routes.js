"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('../login/login.component');
var dashboard_component_1 = require('../dashboard/dashboard.component');
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.dashboardComponent
    },
    { path: '',
        component: login_component_1.LoginComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map