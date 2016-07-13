"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login.component');
var page2_component_1 = require('./page2.component');
exports.routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'page2',
        component: page2_component_1.Page2Component
    },
    { path: '',
        component: login_component_1.LoginComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map