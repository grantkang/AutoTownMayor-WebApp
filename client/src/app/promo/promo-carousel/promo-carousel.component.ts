import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
// import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

import * as PromoActions from '../store/promo.actions';
import * as fromPromo from '../store/promo.reducers';


@Component({
  selector: 'app-promo-carousel',
  templateUrl: './promo-carousel.component.html',
  styleUrls: ['./promo-carousel.component.css']
})
export class PromoCarouselComponent implements OnInit {
  // promoState: Observable<fromPromo.State>;
  // carouselBanner: NgxCarousel;

  constructor(private store: Store<fromPromo.FeatureState>) {}

  ngOnInit() {
    // this.promoState = this.store.select('promo');
    // this.carouselBanner = this.initializeCarousel();
  }

  // initializeCarousel(): NgxCarousel {
  //   return {
  //     grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
  //     slide: 1,
  //     speed: 400,
  //     interval: 4000,
  //     point: {
  //       visible: true,
  //       pointStyles: `
  //         .ngxcarouselPoint {
  //           list-style-type: none;
  //           text-align: center;
  //           padding: 12px;
  //           margin: 0;
  //           white-space: nowrap;
  //           overflow: auto;
  //           position: absolute;
  //           width: 100%;
  //           bottom: 20px;
  //           left: 0;
  //           box-sizing: border-box;
  //         }
  //         .ngxcarouselPoint li {
  //           display: inline-block;
  //           border-radius: 999px;
  //           background: rgba(255, 255, 255, 0.55);
  //           padding: 5px;
  //           margin: 0 3px;
  //           transition: .4s ease all;
  //         }
  //         .ngxcarouselPoint li.active {
  //             background: white;
  //             width: 10px;
  //         }
  //       `
  //     },
  //     load: 1,
  //     loop: true,
  //     touch: true
  //   };
  // }

  // onmoveFn(data: NgxCarouselStore) {
  // }
}
