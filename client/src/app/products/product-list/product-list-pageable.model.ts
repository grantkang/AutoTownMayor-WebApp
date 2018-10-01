import { SalesItem } from '../../shared/model/salesitem.model'
import { MatTableDataSource } from '@angular/material';

export class PageableProductList {
    constructor(
        public salesItems: MatTableDataSource<SalesItem[]>,
        public totalPages: number,
        public totalElements: number,
        public first: boolean,
        public last: boolean,
        public size: number,
        public number: number
    ) {}
}
