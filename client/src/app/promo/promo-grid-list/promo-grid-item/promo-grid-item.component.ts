import { Component, Input } from '@angular/core';
import { PromoGridItem } from '../../model/promo-grid-item.model';

@Component({
  selector: 'app-promo-grid-item',
  templateUrl: './promo-grid-item.component.html',
  styleUrls: []
})
export class PromoGridItemComponent {
  @Input() promoGridItem: PromoGridItem;
}
