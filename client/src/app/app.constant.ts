import { environment } from '../environments/environment';

export class AppConstant {
  // REST
  static readonly BASE_URL: string = `${environment.baseUrl}`;
  static readonly CONTACT_URL: string = '/contact/v1';
  static readonly LOGIN_URL: string = '/login';
  static readonly ITEMS_URL: string = '/items/v1/';
  static readonly ITEM_URL: string = '/items/v1/item/';
  static readonly ITEM_LIST_UPLOAD_URL = '/items/v1/upload';
  static readonly UNAUTHORIZED_ITEMS_URL: string = '/items/v1/withoutprices/';
  static readonly UNAUTHORIZED_ITEM_URL: string = '/items/v1/withoutprices/item/';
  static readonly USER_URL = '/users/v1';
  static readonly USER_LIST_URL = '/users/v1/list';
  static readonly USER_SIGNUP_URL = '/users/v1/signup';
  static readonly USER_PASSWORD_RESET_URL = '/users/v1/passwordreset';
  static readonly USER_PASSWORD_CHANGE_URL = '/users/v1/changepassword';

  // TODO: Should probably create sub classes for constants & put them in the proper subdirectories
  // Product
  // TODO: Let the back-end provide the categories since they may not always match.
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
  static readonly COMPANY_NAME: string = `${environment.companyInfo.companyName}`;
  static readonly PHONE_NUMBER: string = `${environment.companyInfo.phoneNumber}`;
  static readonly FAX_NUMBER: string = `${environment.companyInfo.faxNumber}`;
  static readonly ADDRESS_LINE_1: string = `${environment.companyInfo.addressLine1}`;
  static readonly ADDRESS_LINE_2: string = `${environment.companyInfo.addressLine2}`;
  static readonly ADDRESS_CITY: string = `${environment.companyInfo.addressCity}`;
  static readonly ADDRESS_STATE: string = `${environment.companyInfo.addressState}`;
  static readonly ADDRESS_ZIP: string = `${environment.companyInfo.addressZip}`;
  static readonly COMPANY_INFO = environment.companyInfo;

  // Recaptcha
  static readonly RECAPTCHA_SITE_KEY: string = `${environment.recaptcha}`;

  // JWT
  static readonly ADMIN_ROLENAME: string = 'ROLE_ADMIN';

  // Credentials
  static readonly USERNAME_MIN_LENGTH: number = 4;
  static readonly USERNAME_MAX_LENGTH: number = 30;
  static readonly UESRNAME_REGEX = /^[a-zA-Z0-9]([._](?![._])|[a-zA-Z0-9]){2,28}[a-zA-Z0-9]$/;
  static readonly PASSWORD_MIN_LENGTH: number = 6;
  static readonly PASSWORD_MAX_LENGTH: number = 100;
  static readonly PASSWORD_REGEX = / /;
  // RFC 2822 compliant regex
  static readonly EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

}
