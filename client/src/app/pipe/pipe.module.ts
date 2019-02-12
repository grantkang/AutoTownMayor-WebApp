import { NgModule } from '@angular/core';
import { BulletPipe } from './bullet.pipe';

@NgModule({
    imports:        [],
    declarations:   [BulletPipe],
    exports:        [BulletPipe],
})

export class PipeModule {

  static forRoot() {
     return {
         ngModule: PipeModule,
         providers: [],
     };
  }
}
