import { __values } from 'tslib';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Injectable, Component, Input, ViewEncapsulation, NgModule } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BreadcrumbsService = /** @class */ (function () {
    function BreadcrumbsService() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject();
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
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    };
    BreadcrumbsService.decorators = [
        { type: Injectable }
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
    function BreadcrumbComponent(breadcrumbService, activatedRoute, router) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        breadcrumbService.get().subscribe(function (breadcrumbs) {
            _this.breadcrumbs = (/** @type {?} */ (breadcrumbs));
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
        this.router.events.pipe(filter(function (event) { return event instanceof NavigationEnd; })).subscribe(function (event) {
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
                    if (route.outlet !== PRIMARY_OUTLET) {
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
        { type: Component, args: [{
                    selector: "breadcrumb",
                    template: "\n        <div [ngClass]=\"{ 'container-fluid': allowBootstrap, 'fluid-bread': true}\">\n            <div class=\"container\">\n                <ol [ngClass]=\"{ 'breadcrumb': allowBootstrap}\" class=\"{{addClass ? '' + addClass : ''}}\">\n                    <li *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"\n                        [ngClass]=\"{ 'breadcrumb-item': allowBootstrap, 'list': true, 'active': last }\">\n                        <a *ngIf=\"!last\" [routerLink]=\"hasParams(breadcrumb)\">\n                            {{breadcrumb.label}}\n                        </a>\n                        <span *ngIf=\"last\">{{ breadcrumb.label }}</span>\n                    </li>\n                </ol>\n            </div>\n        </div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n        .fluid-bread {\n            background-color: white;\n        }\n\n        .breadcrumb {\n            background-color: white;\n            padding: 4px;\n            margin-bottom: 0;\n        }"]
                }] }
    ];
    /** @nocollapse */
    BreadcrumbComponent.ctorParameters = function () { return [
        { type: BreadcrumbsService },
        { type: ActivatedRoute },
        { type: Router }
    ]; };
    BreadcrumbComponent.propDecorators = {
        allowBootstrap: [{ type: Input }],
        addClass: [{ type: Input }]
    };
    return BreadcrumbComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

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
        { type: NgModule, args: [{
                    declarations: [
                        BreadcrumbComponent
                    ],
                    providers: [
                        BreadcrumbsService
                    ],
                    imports: [
                        RouterModule,
                        BrowserModule,
                        CommonModule
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

export { BreadcrumbComponent, BreadcrumbsService, BreadcrumbsModule };

//# sourceMappingURL=ng2-breadcrumbs.js.map