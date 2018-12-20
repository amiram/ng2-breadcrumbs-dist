/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
export class BreadcrumbsService {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    BreadcrumbsService.prototype.breadcrumbs;
    /**
     * @type {?}
     * @private
     */
    BreadcrumbsService.prototype.prefixedBreadcrumbs;
    /** @type {?} */
    BreadcrumbsService.prototype.breadcrumbsSource;
    /** @type {?} */
    BreadcrumbsService.prototype.breadcrumbsChanged$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1icmVhZGNydW1icy8iLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUF1QixPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHbkQsTUFBTSxPQUFPLGtCQUFrQjtJQU8zQjtRQUpRLHdCQUFtQixHQUFpQixFQUFFLENBQUM7UUFLM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUFpQixDQUFDO1FBQ3RELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakUsSUFBRyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUN2RjtJQUNMLENBQUM7Ozs7OztJQUdNLEtBQUssQ0FBQyxXQUF5QjtRQUNsQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQzs7WUFFM0IsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN0RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRWhELENBQUM7Ozs7OztJQUlNLGFBQWEsQ0FBQyxVQUFzQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOztZQUNsRixjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEQsQ0FBQzs7Ozs7SUFJTSxHQUFHO1FBQ04sT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUE7SUFDbkMsQ0FBQzs7Ozs7OztJQUtPLGFBQWEsQ0FBQyxhQUF5Qjs7WUFDdkMsUUFBUSxHQUFHLElBQUk7UUFDbkIsS0FBSSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDdkMsSUFBSSxhQUFhLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBRyxRQUFRLEVBQUU7WUFDVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hEO0lBRUwsQ0FBQzs7O1lBMURKLFVBQVU7Ozs7Ozs7OztJQUdQLHlDQUFrQzs7Ozs7SUFDbEMsaURBQStDOztJQUMvQywrQ0FBZ0Q7O0lBQ2hELGlEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SUJyZWFkY3J1bWJ9IGZyb20gXCIuL2JyZWFkY3J1bWJzLm1vZGVsXCI7XG5pbXBvcnQge09ic2VydmFibGUsIE9ic2VydmVyLCBTdWJqZWN0fSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnJlYWRjcnVtYnNTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgYnJlYWRjcnVtYnM6SUJyZWFkY3J1bWJbXTtcbiAgICBwcml2YXRlIHByZWZpeGVkQnJlYWRjcnVtYnM6SUJyZWFkY3J1bWJbXSA9IFtdO1xuICAgIHB1YmxpYyBicmVhZGNydW1ic1NvdXJjZTpTdWJqZWN0PElCcmVhZGNydW1iW10+O1xuICAgIHB1YmxpYyBicmVhZGNydW1ic0NoYW5nZWQkOk9ic2VydmFibGU8SUJyZWFkY3J1bWJbXT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5icmVhZGNydW1icyA9IFtdO1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzU291cmNlID0gbmV3IFN1YmplY3Q8SUJyZWFkY3J1bWJbXT4oKTtcbiAgICAgICAgdGhpcy5icmVhZGNydW1ic0NoYW5nZWQkID0gdGhpcy5icmVhZGNydW1ic1NvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJlZml4ZWRCcmVhZGNydW1icycpICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4ZWRCcmVhZGNydW1icyA9IChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmaXhlZEJyZWFkY3J1bWJzJykpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9TdG9yZSB0aGUgYnJlYWRjcnVtYnMgb2YgdGhlIGN1cnJlbnQgcm91dGVcbiAgICBwdWJsaWMgc3RvcmUoYnJlYWRjcnVtYnM6SUJyZWFkY3J1bWJbXSkge1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gYnJlYWRjcnVtYnM7XG5cbiAgICAgICAgbGV0IGFsbEJyZWFkY3J1bWJzID0gdGhpcy5wcmVmaXhlZEJyZWFkY3J1bWJzLmNvbmNhdCh0aGlzLmJyZWFkY3J1bWJzKTtcbiAgICAgICAgdGhpcy5icmVhZGNydW1ic1NvdXJjZS5uZXh0KGFsbEJyZWFkY3J1bWJzKTtcblxuICAgIH1cblxuXG4gICAgLy8gQWRkIGEgcHJlZml4ZWQgYnJlYWRjcnVtYlxuICAgIHB1YmxpYyBzdG9yZVByZWZpeGVkKGJyZWFkY3J1bWI6SUJyZWFkY3J1bWIpIHtcbiAgICAgICAgdGhpcy5zdG9yZUlmVW5pcXVlKGJyZWFkY3J1bWIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJlZml4ZWRCcmVhZGNydW1icycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJlZml4ZWRCcmVhZGNydW1icykpO1xuICAgICAgICBsZXQgYWxsQnJlYWRjcnVtYnMgPSB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMuY29uY2F0KHRoaXMuYnJlYWRjcnVtYnMpO1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzU291cmNlLm5leHQoYWxsQnJlYWRjcnVtYnMpO1xuXG4gICAgfVxuXG5cbiAgICAvL1JldHVybiB0aGUgYnJlYWRjcnVtYnNcbiAgICBwdWJsaWMgZ2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5icmVhZGNydW1ic0NoYW5nZWQkXG4gICAgfVxuXG5cblxuICAgIC8vIHN0b3JlSWZVbmlxdWUgY2hlY2tzIGlmIHRoZXJlIGFyZSBhbnkgZHVwbGljYXRlIHByZWZpeGVkIGJyZWFkY3J1bWJzXG4gICAgcHJpdmF0ZSBzdG9yZUlmVW5pcXVlKG5ld0JyZWFkY3J1bWI6SUJyZWFkY3J1bWIpIHtcbiAgICAgICAgbGV0IGlzVW5pcXVlID0gdHJ1ZTtcbiAgICAgICAgZm9yKGxldCBjcnVtYiBvZiB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMpIHtcbiAgICAgICAgICAgIGlmIChuZXdCcmVhZGNydW1iLnVybCA9PSBjcnVtYi51cmwpIHtcbiAgICAgICAgICAgICAgICBpc1VuaXF1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGlzVW5pcXVlKSB7XG4gICAgICAgICAgICB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMucHVzaChuZXdCcmVhZGNydW1iKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59Il19