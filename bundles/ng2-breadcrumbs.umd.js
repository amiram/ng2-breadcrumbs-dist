(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/router'), require('@angular/platform-browser'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng2-breadcrumbs', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/router', '@angular/platform-browser', '@angular/common'], factory) :
    (factory((global['ng2-breadcrumbs'] = {}),global.rxjs,global.rxjs.operators,global.ng.core,global.ng.router,global.ng.platformBrowser,global.ng.common));
}(this, (function (exports,rxjs,operators,core,router,platformBrowser,common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbsService = /** @class */ (function () {
        function BreadcrumbsService() {
            this.prefixedBreadcrumbs = [];
            this.breadcrumbs = [];
            this.breadcrumbsSource = new rxjs.Subject();
            this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
            if (localStorage.getItem('prefixedBreadcrumbs') != null) {
                this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')));
            }
        }
        //Store the breadcrumbs of the current route
        //Store the breadcrumbs of the current route
        /**
         * @param {?} breadcrumbs
         * @return {?}
         */
        BreadcrumbsService.prototype.store =
            //Store the breadcrumbs of the current route
            /**
             * @param {?} breadcrumbs
             * @return {?}
             */
            function (breadcrumbs) {
                this.breadcrumbs = breadcrumbs;
                /** @type {?} */
                var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
                this.breadcrumbsSource.next(allBreadcrumbs);
            };
        // Add a prefixed breadcrumb
        // Add a prefixed breadcrumb
        /**
         * @param {?} breadcrumb
         * @return {?}
         */
        BreadcrumbsService.prototype.storePrefixed =
            // Add a prefixed breadcrumb
            /**
             * @param {?} breadcrumb
             * @return {?}
             */
            function (breadcrumb) {
                this.storeIfUnique(breadcrumb);
                localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
                /** @type {?} */
                var allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
                this.breadcrumbsSource.next(allBreadcrumbs);
            };
        //Return the breadcrumbs
        //Return the breadcrumbs
        /**
         * @return {?}
         */
        BreadcrumbsService.prototype.get =
            //Return the breadcrumbs
            /**
             * @return {?}
             */
            function () {
                return this.breadcrumbsChanged$;
            };
        // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
        // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
        /**
         * @private
         * @param {?} newBreadcrumb
         * @return {?}
         */
        BreadcrumbsService.prototype.storeIfUnique =
            // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
            /**
             * @private
             * @param {?} newBreadcrumb
             * @return {?}
             */
            function (newBreadcrumb) {
                var e_1, _a;
                /** @type {?} */
                var isUnique = true;
                try {
                    for (var _b = __values(this.prefixedBreadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var crumb = _c.value;
                        if (newBreadcrumb.url == crumb.url) {
                            isUnique = false;
                            break;
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                if (isUnique) {
                    this.prefixedBreadcrumbs.push(newBreadcrumb);
                }
            };
        BreadcrumbsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BreadcrumbsService.ctorParameters = function () { return []; };
        return BreadcrumbsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbComponent = /** @class */ (function () {
        function BreadcrumbComponent(breadcrumbService, activatedRoute, router$$1) {
            var _this = this;
            this.breadcrumbService = breadcrumbService;
            this.activatedRoute = activatedRoute;
            this.router = router$$1;
            breadcrumbService.get().subscribe(function (breadcrumbs) {
                _this.breadcrumbs = ( /** @type {?} */(breadcrumbs));
            });
        }
        /**
         * @param {?} breadcrumb
         * @return {?}
         */
        BreadcrumbComponent.prototype.hasParams = /**
         * @param {?} breadcrumb
         * @return {?}
         */
            function (breadcrumb) {
                return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
            };
        /**
         * @return {?}
         */
        BreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var ROUTE_DATA_BREADCRUMB = "breadcrumb";
                /** @type {?} */
                var ROUTE_PARAM_BREADCRUMB = "breadcrumb";
                /** @type {?} */
                var PREFIX_BREADCRUMB = "prefixBreadcrumb";
                // subscribe to the NavigationEnd event
                this.router.events.pipe(operators.filter(function (event) { return event instanceof router.NavigationEnd; })).subscribe(function (event) {
                    // reset currentBreadcrumbs
                    _this.currentBreadcrumbs = [];
                    // get the root of the current route
                    /** @type {?} */
                    var currentRoute = _this.activatedRoute.root;
                    // set the url to an empty string
                    /** @type {?} */
                    var url = "";
                    var _loop_1 = function () {
                        /** @type {?} */
                        var childrenRoutes = currentRoute.children;
                        /** @type {?} */
                        var breadCrumbLabel = "";
                        // iterate over each children
                        childrenRoutes.forEach(function (route) {
                            // Set currentRoute to this route
                            currentRoute = route;
                            // Verify this is the primary route
                            if (route.outlet !== router.PRIMARY_OUTLET) {
                                return;
                            }
                            /** @type {?} */
                            var hasData = (route.routeConfig && route.routeConfig.data);
                            /** @type {?} */
                            var hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);
                            if (hasData || hasDynamicBreadcrumb) {
                                /*
                                 Verify the custom data property "breadcrumb"
                                 is specified on the route or in its parameters.
        
                                 Route parameters take precedence over route data
                                 attributes.
                                 */
                                if (hasDynamicBreadcrumb) {
                                    breadCrumbLabel = route.snapshot.params[ROUTE_PARAM_BREADCRUMB].replace(/_/g, " ");
                                }
                                else if (route.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                                    breadCrumbLabel = route.snapshot.data[ROUTE_DATA_BREADCRUMB];
                                }
                                // Get the route's URL segment
                                /** @type {?} */
                                var routeURL = route.snapshot.url.map(function (segment) { return segment.path; }).join("/");
                                url += "/" + routeURL;
                                // Cannot have parameters on a root route
                                if (routeURL.length === 0) {
                                    route.snapshot.params = {};
                                }
                                // Add breadcrumb
                                /** @type {?} */
                                var breadcrumb = {
                                    label: breadCrumbLabel,
                                    params: route.snapshot.params,
                                    url: url
                                };
                                // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                                if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                                    _this.breadcrumbService.storePrefixed(breadcrumb);
                                }
                                else {
                                    _this.currentBreadcrumbs.push(breadcrumb);
                                }
                            }
                        });
                        _this.breadcrumbService.store(_this.currentBreadcrumbs);
                    };
                    // iterate from activated route to children
                    while (currentRoute.children.length > 0) {
                        _loop_1();
                    }
                });
            };
        BreadcrumbComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "breadcrumb",
                        template: "\n        <div [ngClass]=\"{ 'container-fluid': allowBootstrap, 'fluid-bread': true}\">\n            <div class=\"container\">\n                <ol [ngClass]=\"{ 'breadcrumb': allowBootstrap}\" class=\"{{addClass ? '' + addClass : ''}}\">\n                    <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"\n                        [ngClass]=\"{ 'breadcrumb-item': allowBootstrap, 'list': true, 'active': last }\">\n                        <a *ngIf=\"!last\" [routerLink]=\"hasParams(breadcrumb)\">\n                            {{breadcrumb.label}}\n                        </a>\n                        <span *ngIf=\"last\">{{ breadcrumb.label }}</span>\n                    </li>\n                </ol>\n            </div>\n        </div>",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["\n        .fluid-bread {\n            background-color: white;\n        }\n\n        .breadcrumb {\n            background-color: white;\n            padding: 4px;\n            margin-bottom: 0;\n        }"]
                    }] }
        ];
        /** @nocollapse */
        BreadcrumbComponent.ctorParameters = function () {
            return [
                { type: BreadcrumbsService },
                { type: router.ActivatedRoute },
                { type: router.Router }
            ];
        };
        BreadcrumbComponent.propDecorators = {
            allowBootstrap: [{ type: core.Input }],
            addClass: [{ type: core.Input }]
        };
        return BreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BreadcrumbsModule = /** @class */ (function () {
        function BreadcrumbsModule() {
        }
        /**
         * @return {?}
         */
        BreadcrumbsModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BreadcrumbsModule,
                };
            };
        BreadcrumbsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            BreadcrumbComponent
                        ],
                        providers: [
                            BreadcrumbsService
                        ],
                        imports: [
                            router.RouterModule,
                            platformBrowser.BrowserModule,
                            common.CommonModule
                        ],
                        exports: [BreadcrumbComponent]
                    },] }
        ];
        /** @nocollapse */
        BreadcrumbsModule.ctorParameters = function () { return []; };
        return BreadcrumbsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BreadcrumbComponent = BreadcrumbComponent;
    exports.BreadcrumbsService = BreadcrumbsService;
    exports.BreadcrumbsModule = BreadcrumbsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng2-breadcrumbs.umd.js.map