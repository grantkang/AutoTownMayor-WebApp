import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css'
  ]
})
export class PromoComponent implements OnInit {
  // TODO: Create Promo state management that has all the flyers
  flyers = [
    {
      name: 'Promotional Flyer #1',
      filepath: '../assets/documents/flyers/TestFlyer01.pdf',
      bannerImgPath: '../assets/images/flyers/TestBanner01.png'
    },
    {
      name: 'Promotional Flyer #2',
      filepath: '../assets/documents/flyers/TestFlyer02.pdf',
      bannerImgPath: '../assets/images/flyers/TestBanner02.png'
    },
    {
      name: 'Promotional Flyer #3',
      filepath: '../assets/documents/flyers/TestFlyer03.pdf',
      bannerImgPath: '../assets/images/flyers/TestBanner03.png'
    },
    {
      name: 'Promotional Flyer #4',
      filepath: '../assets/documents/flyers/TestFlyer04.pdf',
      bannerImgPath: '../assets/images/flyers/TestBanner04.png'
    },
    {
      name: 'Promotional Flyer #5',
      filepath: '../assets/documents/flyers/TestFlyer05.pdf',
      bannerImgPath: '../assets/images/flyers/TestBanner05.png'
    }
  ]

  carouselBanner: NgxCarousel;

  ngOnInit() {
    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 1,
      loop: true,
      touch: true
    }
  }

  onmoveFn(data: NgxCarouselStore) {
    console.log(data);
  }

}
