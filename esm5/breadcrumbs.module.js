/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from "./breadcrumbs.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { BreadcrumbsService } from "./breadcrumbs.service";
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
export { BreadcrumbsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJyZWFkY3J1bWJzLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RDtJQWdCSTtJQUFlLENBQUM7Ozs7SUFDVCx5QkFBTzs7O0lBQWQ7UUFDSSxPQUFPO1lBQ0gsUUFBUSxFQUFFLGlCQUFpQjtTQUM5QixDQUFDO0lBQ04sQ0FBQzs7Z0JBckJKLFFBQVEsU0FBQztvQkFFTixZQUFZLEVBQUU7d0JBQ1YsbUJBQW1CO3FCQUN0QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Asa0JBQWtCO3FCQUNyQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWixhQUFhO3dCQUNiLFlBQVk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ2pDOzs7O0lBUUQsd0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQVBZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JyZWFkY3J1bWJDb21wb25lbnR9IGZyb20gXCIuL2JyZWFkY3J1bWJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXJcIjtcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQge0JyZWFkY3J1bWJzU2VydmljZX0gZnJvbSBcIi4vYnJlYWRjcnVtYnMuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEJyZWFkY3J1bWJDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCcmVhZGNydW1ic1NlcnZpY2VcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLFxuICAgICAgICBCcm93c2VyTW9kdWxlLFxuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtCcmVhZGNydW1iQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic01vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IEJyZWFkY3J1bWJzTW9kdWxlLFxuICAgICAgICB9O1xuICAgIH1cbn1cblxuIl19