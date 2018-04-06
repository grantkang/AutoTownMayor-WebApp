import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Actions, Effect } from '@ngrx/effects';

import * as ProductActions from './promo.actions';

@Injectable()
export class PromoEffects {
  constructor(private actions$: Actions,
    private httpClient: HttpClient) {}
}
