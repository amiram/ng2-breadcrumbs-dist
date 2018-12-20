/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
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
            for (var _b = tslib_1.__values(this.prefixedBreadcrumbs), _c = _b.next(); !_c.done; _c = _b.next()) {
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
export { BreadcrumbsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1icmVhZGNydW1icy8iLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBdUIsT0FBTyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRW5EO0lBUUk7UUFKUSx3QkFBbUIsR0FBaUIsRUFBRSxDQUFDO1FBSzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBaUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWpFLElBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNwRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDdkY7SUFDTCxDQUFDO0lBRUQsNENBQTRDOzs7Ozs7SUFDckMsa0NBQUs7Ozs7OztJQUFaLFVBQWEsV0FBeUI7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7O1lBRTNCLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVoRCxDQUFDO0lBR0QsNEJBQTRCOzs7Ozs7SUFDckIsMENBQWE7Ozs7OztJQUFwQixVQUFxQixVQUFzQjtRQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDOztZQUNsRixjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUdELHdCQUF3Qjs7Ozs7SUFDakIsZ0NBQUc7Ozs7O0lBQVY7UUFDSSxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQTtJQUNuQyxDQUFDO0lBSUQsdUVBQXVFOzs7Ozs7O0lBQy9ELDBDQUFhOzs7Ozs7O0lBQXJCLFVBQXNCLGFBQXlCOzs7WUFDdkMsUUFBUSxHQUFHLElBQUk7O1lBQ25CLEtBQWlCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsbUJBQW1CLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXZDLElBQUksS0FBSyxXQUFBO2dCQUNULElBQUksYUFBYSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxFQUFFO29CQUNoQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixNQUFNO2lCQUNUO2FBQ0o7Ozs7Ozs7OztRQUNELElBQUcsUUFBUSxFQUFFO1lBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNoRDtJQUVMLENBQUM7O2dCQTFESixVQUFVOzs7O0lBNERYLHlCQUFDO0NBQUEsQUE1REQsSUE0REM7U0EzRFksa0JBQWtCOzs7Ozs7SUFFM0IseUNBQWtDOzs7OztJQUNsQyxpREFBK0M7O0lBQy9DLCtDQUFnRDs7SUFDaEQsaURBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJQnJlYWRjcnVtYn0gZnJvbSBcIi4vYnJlYWRjcnVtYnMubW9kZWxcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZSwgT2JzZXJ2ZXIsIFN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1ic1NlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSBicmVhZGNydW1iczpJQnJlYWRjcnVtYltdO1xuICAgIHByaXZhdGUgcHJlZml4ZWRCcmVhZGNydW1iczpJQnJlYWRjcnVtYltdID0gW107XG4gICAgcHVibGljIGJyZWFkY3J1bWJzU291cmNlOlN1YmplY3Q8SUJyZWFkY3J1bWJbXT47XG4gICAgcHVibGljIGJyZWFkY3J1bWJzQ2hhbmdlZCQ6T2JzZXJ2YWJsZTxJQnJlYWRjcnVtYltdPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzID0gW107XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnNTb3VyY2UgPSBuZXcgU3ViamVjdDxJQnJlYWRjcnVtYltdPigpO1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzQ2hhbmdlZCQgPSB0aGlzLmJyZWFkY3J1bWJzU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcmVmaXhlZEJyZWFkY3J1bWJzJykgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wcmVmaXhlZEJyZWFkY3J1bWJzID0gKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3ByZWZpeGVkQnJlYWRjcnVtYnMnKSkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1N0b3JlIHRoZSBicmVhZGNydW1icyBvZiB0aGUgY3VycmVudCByb3V0ZVxuICAgIHB1YmxpYyBzdG9yZShicmVhZGNydW1iczpJQnJlYWRjcnVtYltdKSB7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBicmVhZGNydW1icztcblxuICAgICAgICBsZXQgYWxsQnJlYWRjcnVtYnMgPSB0aGlzLnByZWZpeGVkQnJlYWRjcnVtYnMuY29uY2F0KHRoaXMuYnJlYWRjcnVtYnMpO1xuICAgICAgICB0aGlzLmJyZWFkY3J1bWJzU291cmNlLm5leHQoYWxsQnJlYWRjcnVtYnMpO1xuXG4gICAgfVxuXG5cbiAgICAvLyBBZGQgYSBwcmVmaXhlZCBicmVhZGNydW1iXG4gICAgcHVibGljIHN0b3JlUHJlZml4ZWQoYnJlYWRjcnVtYjpJQnJlYWRjcnVtYikge1xuICAgICAgICB0aGlzLnN0b3JlSWZVbmlxdWUoYnJlYWRjcnVtYik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcmVmaXhlZEJyZWFkY3J1bWJzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVmaXhlZEJyZWFkY3J1bWJzKSk7XG4gICAgICAgIGxldCBhbGxCcmVhZGNydW1icyA9IHRoaXMucHJlZml4ZWRCcmVhZGNydW1icy5jb25jYXQodGhpcy5icmVhZGNydW1icyk7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnNTb3VyY2UubmV4dChhbGxCcmVhZGNydW1icyk7XG5cbiAgICB9XG5cblxuICAgIC8vUmV0dXJuIHRoZSBicmVhZGNydW1ic1xuICAgIHB1YmxpYyBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJyZWFkY3J1bWJzQ2hhbmdlZCRcbiAgICB9XG5cblxuXG4gICAgLy8gc3RvcmVJZlVuaXF1ZSBjaGVja3MgaWYgdGhlcmUgYXJlIGFueSBkdXBsaWNhdGUgcHJlZml4ZWQgYnJlYWRjcnVtYnNcbiAgICBwcml2YXRlIHN0b3JlSWZVbmlxdWUobmV3QnJlYWRjcnVtYjpJQnJlYWRjcnVtYikge1xuICAgICAgICBsZXQgaXNVbmlxdWUgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IGNydW1iIG9mIHRoaXMucHJlZml4ZWRCcmVhZGNydW1icykge1xuICAgICAgICAgICAgaWYgKG5ld0JyZWFkY3J1bWIudXJsID09IGNydW1iLnVybCkge1xuICAgICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoaXNVbmlxdWUpIHtcbiAgICAgICAgICAgIHRoaXMucHJlZml4ZWRCcmVhZGNydW1icy5wdXNoKG5ld0JyZWFkY3J1bWIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn0iXX0=