import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-category-list-item',
  templateUrl: './product-category-list-item.component.html',
  styleUrls: ['./product-category-list-item.component.css']
})
export class ProductCategoryListItemComponent implements OnInit {
  @Input() category: String;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
