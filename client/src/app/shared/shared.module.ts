import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { NgxCarouselModule } from 'ngx-carousel';

import { MaterialModule } from './module/material.module';
import { PipeModule } from '../pipe/pipe.module';

/*  TODO: Figure out which modules to belong exclusively to Shared/App modules
 *        Most guides tell me to have some of these modules in just the App module
 *        but they don't work unless they're included in the Shared module. If I
 *        were to keep them exclusively in the app module, I'll have to include them
 *        in the exports property but the guides don't mention that.
 */

@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    // NgxCarouselModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    // NgxCarouselModule
  ]
})
export class SharedModule {}
