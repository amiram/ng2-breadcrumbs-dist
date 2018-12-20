/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewEncapsulation } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET } from "@angular/router";
import { BreadcrumbsService } from "./breadcrumbs.service";
import { filter } from 'rxjs/operators';
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
export { BreadcrumbComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.currentBreadcrumbs;
    /** @type {?} */
    BreadcrumbComponent.prototype.breadcrumbs;
    /** @type {?} */
    BreadcrumbComponent.prototype.allowBootstrap;
    /** @type {?} */
    BreadcrumbComponent.prototype.addClass;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.breadcrumbService;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.activatedRoute;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJyZWFkY3J1bWJzLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUMsTUFBTSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQVUsY0FBYyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFOUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDekQsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR3RDO0lBMkNJLDZCQUEyQixpQkFBcUMsRUFBVSxjQUE4QixFQUFVLE1BQWM7UUFBaEksaUJBSUM7UUFKMEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDNUgsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsV0FBMEI7WUFDekQsS0FBSSxDQUFDLFdBQVcsR0FBRyxtQkFBQSxXQUFXLEVBQWlCLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVNLHVDQUFTOzs7O0lBQWhCLFVBQWlCLFVBQXVCO1FBQ3BDLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxRyxDQUFDOzs7O0lBR00sc0NBQVE7OztJQUFmO1FBQUEsaUJBbUZDOztZQWxG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QyxDQUFDLENBQUM7SUFDUCxDQUFDOztnQkF6SUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUscXZCQWFDO29CQVdYLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzZCQVY1QiwrTUFTSDtpQkFFVDs7OztnQkEvQk8sa0JBQWtCO2dCQUZWLGNBQWM7Z0JBQXRCLE1BQU07OztpQ0EwQ1QsS0FBSzsyQkFHTCxLQUFLOztJQW1HViwwQkFBQztDQUFBLEFBMUlELElBMElDO1NBN0dZLG1CQUFtQjs7Ozs7O0lBRzVCLGlEQUEwQzs7SUFFMUMsMENBQWtDOztJQUVsQyw2Q0FDK0I7O0lBRS9CLHVDQUN3Qjs7Ozs7SUFHTCxnREFBNkM7Ozs7O0lBQUUsNkNBQXNDOzs7OztJQUFFLHFDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgTmF2aWdhdGlvbkVuZCwgUGFyYW1zLCBQUklNQVJZX09VVExFVH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtJQnJlYWRjcnVtYn0gZnJvbSBcIi4vYnJlYWRjcnVtYnMubW9kZWxcIjtcbmltcG9ydCB7QnJlYWRjcnVtYnNTZXJ2aWNlfSBmcm9tIFwiLi9icmVhZGNydW1icy5zZXJ2aWNlXCI7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImJyZWFkY3J1bWJcIixcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsgJ2NvbnRhaW5lci1mbHVpZCc6IGFsbG93Qm9vdHN0cmFwLCAnZmx1aWQtYnJlYWQnOiB0cnVlfVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxvbCBbbmdDbGFzc109XCJ7ICdicmVhZGNydW1iJzogYWxsb3dCb290c3RyYXB9XCIgY2xhc3M9XCJ7e2FkZENsYXNzID8gJycgKyBhZGRDbGFzcyA6ICcnfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBicmVhZGNydW1iIG9mIGJyZWFkY3J1bWJzOyBsZXQgbGFzdCA9IGxhc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnYnJlYWRjcnVtYi1pdGVtJzogYWxsb3dCb290c3RyYXAsICdsaXN0JzogdHJ1ZSwgJ2FjdGl2ZSc6IGxhc3QgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhbGFzdFwiIFtyb3V0ZXJMaW5rXT1cImhhc1BhcmFtcyhicmVhZGNydW1iKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7YnJlYWRjcnVtYi5sYWJlbH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImxhc3RcIj57eyBicmVhZGNydW1iLmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5mbHVpZC1icmVhZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5icmVhZGNydW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfWBdLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5cbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIC8vIFRoZSBicmVhZGNydW1icyBvZiB0aGUgY3VycmVudCByb3V0ZVxuICAgIHByaXZhdGUgY3VycmVudEJyZWFkY3J1bWJzOiBJQnJlYWRjcnVtYltdO1xuICAgIC8vIEFsbCB0aGUgYnJlYWRjcnVtYnNcbiAgICBwdWJsaWMgYnJlYWRjcnVtYnM6IElCcmVhZGNydW1iW107XG5cbiAgICBASW5wdXQoKVxuICAgIHB1YmxpYyBhbGxvd0Jvb3RzdHJhcDogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpXG4gICAgcHVibGljIGFkZENsYXNzOiBzdHJpbmc7XG5cblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyZWFkY3J1bWJTZXJ2aWNlOiBCcmVhZGNydW1ic1NlcnZpY2UsIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIGJyZWFkY3J1bWJTZXJ2aWNlLmdldCgpLnN1YnNjcmliZSgoYnJlYWRjcnVtYnM6IElCcmVhZGNydW1iW10pID0+IHtcbiAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBicmVhZGNydW1icyBhcyBJQnJlYWRjcnVtYltdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzUGFyYW1zKGJyZWFkY3J1bWI6IElCcmVhZGNydW1iKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhicmVhZGNydW1iLnBhcmFtcykubGVuZ3RoID8gW2JyZWFkY3J1bWIudXJsLCBicmVhZGNydW1iLnBhcmFtc10gOiBbYnJlYWRjcnVtYi51cmxdO1xuICAgIH1cblxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zdCBST1VURV9EQVRBX0JSRUFEQ1JVTUI6IHN0cmluZyA9IFwiYnJlYWRjcnVtYlwiO1xuICAgICAgICBjb25zdCBST1VURV9QQVJBTV9CUkVBRENSVU1COiBzdHJpbmcgPSBcImJyZWFkY3J1bWJcIjtcbiAgICAgICAgY29uc3QgUFJFRklYX0JSRUFEQ1JVTUI6IHN0cmluZyA9IFwicHJlZml4QnJlYWRjcnVtYlwiO1xuXG4gICAgICAgIC8vIHN1YnNjcmliZSB0byB0aGUgTmF2aWdhdGlvbkVuZCBldmVudFxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIHJlc2V0IGN1cnJlbnRCcmVhZGNydW1ic1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QnJlYWRjcnVtYnMgPSBbXTtcblxuXG4gICAgICAgICAgICAvLyBnZXQgdGhlIHJvb3Qgb2YgdGhlIGN1cnJlbnQgcm91dGVcbiAgICAgICAgICAgIGxldCBjdXJyZW50Um91dGU6IEFjdGl2YXRlZFJvdXRlID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5yb290O1xuXG5cbiAgICAgICAgICAgIC8vIHNldCB0aGUgdXJsIHRvIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgbGV0IHVybDogc3RyaW5nID0gXCJcIjtcblxuICAgICAgICAgICAgLy8gaXRlcmF0ZSBmcm9tIGFjdGl2YXRlZCByb3V0ZSB0byBjaGlsZHJlblxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRSb3V0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuUm91dGVzOiBBY3RpdmF0ZWRSb3V0ZVtdID0gY3VycmVudFJvdXRlLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIGxldCBicmVhZENydW1iTGFiZWw6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgZWFjaCBjaGlsZHJlblxuICAgICAgICAgICAgICAgIGNoaWxkcmVuUm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgY3VycmVudFJvdXRlIHRvIHRoaXMgcm91dGVcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFJvdXRlID0gcm91dGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIFZlcmlmeSB0aGlzIGlzIHRoZSBwcmltYXJ5IHJvdXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZS5vdXRsZXQgIT09IFBSSU1BUllfT1VUTEVUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNEYXRhID0gKHJvdXRlLnJvdXRlQ29uZmlnICYmIHJvdXRlLnJvdXRlQ29uZmlnLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNEeW5hbWljQnJlYWRjcnVtYjogYm9vbGVhbiA9IHJvdXRlLnNuYXBzaG90LnBhcmFtcy5oYXNPd25Qcm9wZXJ0eShST1VURV9QQVJBTV9CUkVBRENSVU1CKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRGF0YSB8fCBoYXNEeW5hbWljQnJlYWRjcnVtYikge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgVmVyaWZ5IHRoZSBjdXN0b20gZGF0YSBwcm9wZXJ0eSBcImJyZWFkY3J1bWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGlzIHNwZWNpZmllZCBvbiB0aGUgcm91dGUgb3IgaW4gaXRzIHBhcmFtZXRlcnMuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZSBwYXJhbWV0ZXJzIHRha2UgcHJlY2VkZW5jZSBvdmVyIHJvdXRlIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRHluYW1pY0JyZWFkY3J1bWIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhZENydW1iTGFiZWwgPSByb3V0ZS5zbmFwc2hvdC5wYXJhbXNbUk9VVEVfUEFSQU1fQlJFQURDUlVNQl0ucmVwbGFjZSgvXy9nLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLnNuYXBzaG90LmRhdGEuaGFzT3duUHJvcGVydHkoUk9VVEVfREFUQV9CUkVBRENSVU1CKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkQ3J1bWJMYWJlbCA9IHJvdXRlLnNuYXBzaG90LmRhdGFbUk9VVEVfREFUQV9CUkVBRENSVU1CXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IHRoZSByb3V0ZSdzIFVSTCBzZWdtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGVVUkw6IHN0cmluZyA9IHJvdXRlLnNuYXBzaG90LnVybC5tYXAoc2VnbWVudCA9PiBzZWdtZW50LnBhdGgpLmpvaW4oXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9IGAvJHtyb3V0ZVVSTH1gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDYW5ub3QgaGF2ZSBwYXJhbWV0ZXJzIG9uIGEgcm9vdCByb3V0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlVVJMLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLnNuYXBzaG90LnBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBicmVhZGNydW1iXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnJlYWRjcnVtYjogSUJyZWFkY3J1bWIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGJyZWFkQ3J1bWJMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHJvdXRlLnNuYXBzaG90LnBhcmFtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHRoZSBicmVhZGNydW1iIGFzICdwcmVmaXhlZCcuIEl0IHdpbGwgYXBwZWFyIGJlZm9yZSBhbGwgYnJlYWRjcnVtYnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZS5zbmFwc2hvdC5kYXRhLmhhc093blByb3BlcnR5KFBSRUZJWF9CUkVBRENSVU1CKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnJlYWRjcnVtYlNlcnZpY2Uuc3RvcmVQcmVmaXhlZChicmVhZGNydW1iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEJyZWFkY3J1bWJzLnB1c2goYnJlYWRjcnVtYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJyZWFkY3J1bWJTZXJ2aWNlLnN0b3JlKHRoaXMuY3VycmVudEJyZWFkY3J1bWJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==