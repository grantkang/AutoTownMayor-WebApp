export class AppConstant {
  // REST
  static readonly BASE_URL: string = 'http://localhost:8080';
  static readonly CONTACT_URL: string = '/contact/v1';
  static readonly LOGIN_URL: string = '/login';
  static readonly ITEMS_URL: string = '/items/v1/';
  static readonly ITEM_URL: string = '/items/v1/item/';
  static readonly UNAUTHORIZED_ITEMS_URL: string = '/items/v1/withoutprices/';
  static readonly UNAUTHORIZED_ITEM_URL: string = '/items/v1/withoutprices/item/';

  // TODO: Should probably create sub classes for constants & put them in the proper subdirectories
  // Product
  static readonly ITEM_CATEGORIES: string[] = [
    'air condition supply',
    'air filter',
    'cabin filter',
    'cartridge filter',
    'chemical',
    'coolant',
    'engine oil',
    'fastener',
    'flash & fuse',
    'gas can',
    'gas cap',
    'gas filter',
    'glove',
    'hose',
    'hose clamp',
    'hydraulic & gear oil',
    'light bulb',
    'misc.',
    'oil filter',
    'paint',
    'polish',
    'radiator cap',
    'sealer & silicon',
    'shop supply',
    'smog supply',
    'spark plug',
    'tire fix supply',
    'tool',
    'transmission fluid',
    'wheel weight',
    'windshield wiper'
  ];
}
