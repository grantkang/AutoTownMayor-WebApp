// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const BASE_URL_DEV = 'http://localhost:5000';
const COMPANY_INFO_DEV = {
  companyName: 'ATM',
  phoneNumber: '(XXX) XXX-XXXX',
  faxNumber: '(XXX) XXX-XXXX',
  addressLine1: '1234 Somewhere St.',
  addressLine2: '#123',
  addressCity: 'City',
  addressState: 'CA',
  addressZip: 'XXXXX',
  googleMapsEmbedURL: 'https://www.google.com/maps/embed?pb'
}

export const environment = {
  production: false,
  baseUrl: BASE_URL_DEV,
  companyInfo: COMPANY_INFO_DEV
};
