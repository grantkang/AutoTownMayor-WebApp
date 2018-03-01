import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/module/material.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    ContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class CoreModule {}
