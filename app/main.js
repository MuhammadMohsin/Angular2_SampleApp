"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var initializer_component_1 = require('./components/app.initializer/initializer.component');
var app_routes_1 = require('./components/routes/app.routes');
platform_browser_dynamic_1.bootstrap(initializer_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS
]).catch(function (err) { return console.error(err); });
;
//# sourceMappingURL=main.js.map