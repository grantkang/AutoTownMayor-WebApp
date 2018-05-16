export class AppConstant {
  // REST
  static readonly BASE_URL: string = 'http://localhost:5000';
  static readonly BASE_URL_DEV: string = 'http://localhost:5000';
  static readonly BASE_URL_PROD: string = 'http://autotownmayorserver-env.w4jqfjwac3.us-west-1.elasticbeanstalk.com';
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

  // Company Info
  static readonly COMPANY_NAME: string = 'Auto Town Mayor';
  static readonly PHONE_NUMBER: string = '(310) 965-0909';
  static readonly FAX_NUMBER: string = '(310) 965-XXXX'; // TODO: Find out what the fax number is
  static readonly ADDRESS_LINE_1: string = '17813 S Main St';
  static readonly ADDRESS_LINE_2: string = '#118';
  static readonly ADDRESS_CITY: string = 'Torrance';
  static readonly ADDRESS_STATE: string = 'CA';
  static readonly ADDRESS_ZIP: string = '90501';
}
