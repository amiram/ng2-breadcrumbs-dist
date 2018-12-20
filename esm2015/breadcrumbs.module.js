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
export class BreadcrumbsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLWJyZWFkY3J1bWJzLyIsInNvdXJjZXMiOlsiYnJlYWRjcnVtYnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQWlCekQsTUFBTSxPQUFPLGlCQUFpQjtJQUMxQixnQkFBZSxDQUFDOzs7O0lBQ2hCLE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQztJQUNOLENBQUM7OztZQXJCSixRQUFRLFNBQUM7Z0JBRU4sWUFBWSxFQUFFO29CQUNWLG1CQUFtQjtpQkFDdEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNQLGtCQUFrQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixZQUFZO2lCQUNmO2dCQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2FBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJlYWRjcnVtYkNvbXBvbmVudH0gZnJvbSBcIi4vYnJlYWRjcnVtYnMuY29tcG9uZW50XCI7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7QnJlYWRjcnVtYnNTZXJ2aWNlfSBmcm9tIFwiLi9icmVhZGNydW1icy5zZXJ2aWNlXCI7XG5cbkBOZ01vZHVsZSh7XG5cbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQnJlYWRjcnVtYkNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJyZWFkY3J1bWJzU2VydmljZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZVxuICAgIF0sXG4gICAgZXhwb3J0czogW0JyZWFkY3J1bWJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEJyZWFkY3J1bWJzTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQnJlYWRjcnVtYnNNb2R1bGUsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4iXX0=