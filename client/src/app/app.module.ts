import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './store/app.reducers';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './product-list/product-list.module';
import { PromoModule } from './promo/promo.module';
import { CompanyInfoModule } from './company-info/company-info.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    ProductsModule,
    PromoModule,
    CompanyInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
