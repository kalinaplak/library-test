import { Component, NgModule } from '@angular/core';

class Box {
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
Box.ctorParameters = () => [];

class BoxModule {
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
BoxModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { BoxModule, Box };
