import { Action } from '@ngrx/store';

export const FETCH_PROMO_CAROUSEL_ITEMS = 'FETCH_PROMO_CAROUSEL_ITEMS';

export class FetchPromoCarouselItems implements Action {
  readonly type = FETCH_PROMO_CAROUSEL_ITEMS;

}

export type PromoActions = FetchPromoCarouselItems;
