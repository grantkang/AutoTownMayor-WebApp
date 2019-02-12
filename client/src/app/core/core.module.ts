import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { AppRoutingModule } from '../app-routing.module';
import { AppConstant } from '../../app/app.constant';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptor/auth.interceptor';
import { CoreComponent } from './core.component';

@NgModule({
  declarations: [
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    CoreComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    ContactComponent,
    CoreComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: AppConstant.RECAPTCHA_SITE_KEY
        ,
      } as RecaptchaSettings,
    }
  ]
})
export class CoreModule {}
