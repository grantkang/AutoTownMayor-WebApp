export class SalesItem {
    constructor(
        public id: string,
        public type: string,
        public activeStatus: string,
        public name: string,
        public description: string,
        public price: number,
        public quantity: number
    ) {}
}
