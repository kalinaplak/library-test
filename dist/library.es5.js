import { Component, NgModule } from '@angular/core';

var Box = (function () {
    function Box() {
    }
    Box.decorators = [
        { type: Component, args: [{
                    selector: 'box',
                    template: "<div><ng-content></ng-content></div>",
                    styles: ['']
                },] },
    ];
    /**
     * @nocollapse
     */
    Box.ctorParameters = function () { return []; };
    return Box;
}());

var BoxModule = (function () {
    function BoxModule() {
    }
    BoxModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Box],
                    exports: [Box]
                },] },
    ];
    /**
     * @nocollapse
     */
    BoxModule.ctorParameters = function () { return []; };
    return BoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { BoxModule, Box };
