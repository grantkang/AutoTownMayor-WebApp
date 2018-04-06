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
      '../assets/documents/flyers/TestFlyer01.pdf',
      '../assets/images/flyers/TestBanner01.png'),
    new PromoCarouselItem(
      'Promotional Flyer #2',
      '../assets/documents/flyers/TestFlyer02.pdf',
      '../assets/images/flyers/TestBanner02.png'),
    new PromoCarouselItem(
      'Promotional Flyer #3',
      '../assets/documents/flyers/TestFlyer03.pdf',
      '../assets/images/flyers/TestBanner03.png'),
    new PromoCarouselItem(
      'Promotional Flyer #4',
      '../assets/documents/flyers/TestFlyer04.pdf',
      '../assets/images/flyers/TestBanner04.png'),
    new PromoCarouselItem(
      'Promotional Flyer #5',
      '../assets/documents/flyers/TestFlyer05.pdf',
      '../assets/images/flyers/TestBanner05.png')
  ],
  gridItems: [
    new PromoGridItem(
      'Catalog #1',
      '../assets/documents/flyers/TestFlyer01.pdf',
      '../assets/images/flyers/TestBanner01.png'),
    new PromoGridItem(
      'Catalog #2',
      '../assets/documents/flyers/TestFlyer02.pdf',
      '../assets/images/flyers/TestBanner02.png'),
    new PromoGridItem(
      'Catalog #3',
      '../assets/documents/flyers/TestFlyer03.pdf',
      '../assets/images/flyers/TestBanner03.png'),
    new PromoGridItem(
      'Catalog #4',
      '../assets/documents/flyers/TestFlyer04.pdf',
      '../assets/images/flyers/TestBanner04.png'),
    new PromoGridItem(
      'Catalog #5',
      '../assets/documents/flyers/TestFlyer05.pdf',
      '../assets/images/flyers/TestBanner05.png')
  ]
}

export function promoReducer(state = initialState, action: PromoActions.PromoActions) {
    switch (action.type) {
      default:
        return state;
    }
}
