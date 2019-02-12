import { Component, OnChanges, OnInit, Input } from '@angular/core';
import { SalesItem } from 'app/shared/model/salesitem.model';
@Component({
  selector: 'app-product-image-loader',
  templateUrl: './product-image-loader.component.html',
  styleUrls: [
  ],
})
export class ProductImageLoaderComponent implements OnInit {
  @Input() item: SalesItem;
  @Input() height: number;

  imageFilePath: string;
  imageFilePathPrefix = '../../../assets/images/items/';

  constructor() { }

  ngOnInit() {
    this.imageFilePath = this.imageFilePathPrefix + this.item.name + '.jpg';
  }

  replaceImage() {
    this.imageFilePath = this.imageFilePathPrefix + 'unavailable/' + this.item.category + '_default_prod.jpg';
  }
}
