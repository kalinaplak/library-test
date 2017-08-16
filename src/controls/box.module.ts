import { NgModule } from '@angular/core';
import { Box } from './box.component';
export * from './box.component';

@NgModule({
  declarations: [Box],
  exports: [Box]
})
export class BoxModule { }