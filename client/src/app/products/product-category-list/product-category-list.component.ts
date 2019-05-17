import { Component, OnInit } from '@angular/core';
import { AppConstant } from 'app/app.constant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {
  categories = AppConstant.ITEM_CATEGORIES;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  onClick(category) {
    this.router.navigate(['../list'], { relativeTo: this.route, queryParams: {categoryFilter: category}})
  }
}
