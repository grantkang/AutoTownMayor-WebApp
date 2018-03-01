export class AppConstant {
  static readonly BASE_URL: string = 'http://localhost:8080';
  static readonly LOGIN_URL: string = '/login';
  static readonly ITEMS_URL: string = '/items/v1/';
  static readonly ITEM_URL: string = '/items/v1/item/';
  static readonly UNAUTHORIZED_ITEMS_URL: string = '/items/v1/withoutprices/';
  static readonly UNAUTHORIZED_ITEM_URL: string = '/items/v1/withoutprices/item/';
}
