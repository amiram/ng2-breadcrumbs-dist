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
class BreadcrumbsService {
    constructor() {
        this.prefixedBreadcrumbs = [];
        this.breadcrumbs = [];
        this.breadcrumbsSource = new Subject();
        this.breadcrumbsChanged$ = this.breadcrumbsSource.asObservable();
        if (localStorage.getItem('prefixedBreadcrumbs') != null) {
            this.prefixedBreadcrumbs = (JSON.parse(localStorage.getItem('prefixedBreadcrumbs')));
        }
    }
    //Store the breadcrumbs of the current route
    /**
     * @param {?} breadcrumbs
     * @return {?}
     */
    store(breadcrumbs) {
        this.breadcrumbs = breadcrumbs;
        /** @type {?} */
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    }
    // Add a prefixed breadcrumb
    /**
     * @param {?} breadcrumb
     * @return {?}
     */
    storePrefixed(breadcrumb) {
        this.storeIfUnique(breadcrumb);
        localStorage.setItem('prefixedBreadcrumbs', JSON.stringify(this.prefixedBreadcrumbs));
        /** @type {?} */
        let allBreadcrumbs = this.prefixedBreadcrumbs.concat(this.breadcrumbs);
        this.breadcrumbsSource.next(allBreadcrumbs);
    }
    //Return the breadcrumbs
    /**
     * @return {?}
     */
    get() {
        return this.breadcrumbsChanged$;
    }
    // storeIfUnique checks if there are any duplicate prefixed breadcrumbs
    /**
     * @private
     * @param {?} newBreadcrumb
     * @return {?}
     */
    storeIfUnique(newBreadcrumb) {
        /** @type {?} */
        let isUnique = true;
        for (let crumb of this.prefixedBreadcrumbs) {
            if (newBreadcrumb.url == crumb.url) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            this.prefixedBreadcrumbs.push(newBreadcrumb);
        }
    }
}
BreadcrumbsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BreadcrumbsService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbComponent {
    /**
     * @param {?} breadcrumbService
     * @param {?} activatedRoute
     * @param {?} router
     */
    constructor(breadcrumbService, activatedRoute, router) {
        this.breadcrumbService = breadcrumbService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        breadcrumbService.get().subscribe((breadcrumbs) => {
            this.breadcrumbs = (/** @type {?} */ (breadcrumbs));
        });
    }
    /**
     * @param {?} breadcrumb
     * @return {?}
     */
    hasParams(breadcrumb) {
        return Object.keys(breadcrumb.params).length ? [breadcrumb.url, breadcrumb.params] : [breadcrumb.url];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const ROUTE_DATA_BREADCRUMB = "breadcrumb";
        /** @type {?} */
        const ROUTE_PARAM_BREADCRUMB = "breadcrumb";
        /** @type {?} */
        const PREFIX_BREADCRUMB = "prefixBreadcrumb";
        // subscribe to the NavigationEnd event
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
            // reset currentBreadcrumbs
            this.currentBreadcrumbs = [];
            // get the root of the current route
            /** @type {?} */
            let currentRoute = this.activatedRoute.root;
            // set the url to an empty string
            /** @type {?} */
            let url = "";
            // iterate from activated route to children
            while (currentRoute.children.length > 0) {
                /** @type {?} */
                let childrenRoutes = currentRoute.children;
                /** @type {?} */
                let breadCrumbLabel = "";
                // iterate over each children
                childrenRoutes.forEach(route => {
                    // Set currentRoute to this route
                    currentRoute = route;
                    // Verify this is the primary route
                    if (route.outlet !== PRIMARY_OUTLET) {
                        return;
                    }
                    /** @type {?} */
                    const hasData = (route.routeConfig && route.routeConfig.data);
                    /** @type {?} */
                    const hasDynamicBreadcrumb = route.snapshot.params.hasOwnProperty(ROUTE_PARAM_BREADCRUMB);
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
                        let routeURL = route.snapshot.url.map(segment => segment.path).join("/");
                        url += `/${routeURL}`;
                        // Cannot have parameters on a root route
                        if (routeURL.length === 0) {
                            route.snapshot.params = {};
                        }
                        // Add breadcrumb
                        /** @type {?} */
                        let breadcrumb = {
                            label: breadCrumbLabel,
                            params: route.snapshot.params,
                            url: url
                        };
                        // Add the breadcrumb as 'prefixed'. It will appear before all breadcrumbs
                        if (route.snapshot.data.hasOwnProperty(PREFIX_BREADCRUMB)) {
                            this.breadcrumbService.storePrefixed(breadcrumb);
                        }
                        else {
                            this.currentBreadcrumbs.push(breadcrumb);
                        }
                    }
                });
                this.breadcrumbService.store(this.currentBreadcrumbs);
            }
        });
    }
}
BreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: "breadcrumb",
                template: `
        <div [ngClass]="{ 'container-fluid': allowBootstrap, 'fluid-bread': true}">
            <div class="container">
                <ol [ngClass]="{ 'breadcrumb': allowBootstrap}" class="{{addClass ? '' + addClass : ''}}">
                    <li *ngFor="let breadcrumb of breadcrumbs; let last = last"
                        [ngClass]="{ 'breadcrumb-item': allowBootstrap, 'list': true, 'active': last }">
                        <a *ngIf="!last" [routerLink]="hasParams(breadcrumb)">
                            {{breadcrumb.label}}
                        </a>
                        <span *ngIf="last">{{ breadcrumb.label }}</span>
                    </li>
                </ol>
            </div>
        </div>`,
                encapsulation: ViewEncapsulation.None,
                styles: [`
        .fluid-bread {
            background-color: white;
        }

        .breadcrumb {
            background-color: white;
            padding: 4px;
            margin-bottom: 0;
        }`]
            }] }
];
/** @nocollapse */
BreadcrumbComponent.ctorParameters = () => [
    { type: BreadcrumbsService },
    { type: ActivatedRoute },
    { type: Router }
];
BreadcrumbComponent.propDecorators = {
    allowBootstrap: [{ type: Input }],
    addClass: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BreadcrumbsModule {
    constructor() { }
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: BreadcrumbsModule,
        };
    }
}
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
BreadcrumbsModule.ctorParameters = () => [];

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