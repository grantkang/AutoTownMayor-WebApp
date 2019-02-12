import { PromoCarouselItem } from '../model/promo-carousel-item.model';
import { PromoGridItem } from '../model/promo-grid-item.model';
import * as fromApp from '../../store/app.reducers';
import * as PromoActions from './promo.actions';

export interface FeatureState extends fromApp.AppState {
  promo: State
}

export interface State {
  carouselItems: PromoCarouselItem[],
  gridItems: PromoGridItem[]
}

// TODO: Both carousel item & grid item have the same properties
//       Can probably just use one model.
//       Figure out how to use absolute paths for accessing asset files
const initialState = {
  carouselItems: [
    new PromoCarouselItem(
      'Promotional Flyer #1',
      '.',
      '../assets/images/banners/promo_banner.png'),
    new PromoCarouselItem(
      'Promotional Flyer #2',
      '.',
      '../assets/images/banners/promo_banner_02.png')
  ],
  gridItems: [
    new PromoGridItem(
      'Catalog #1',
      '../assets/documents/flyers/lubeflow_flyer_v2.pdf',
      '../assets/images/banners/TestBanner01.png'),
    new PromoGridItem(
      'Catalog #2',
      '../assets/documents/flyers/quaker_flyer.pdf',
      '../assets/images/banners/TestBanner02.png'),
  ]
}

export function promoReducer(state = initialState, action: PromoActions.PromoActions) {
    switch (action.type) {
      default:
        return state;
    }
}
