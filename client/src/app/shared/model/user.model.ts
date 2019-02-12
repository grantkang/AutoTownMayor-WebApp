export class User {
  constructor(
      public id?: string,
      public username?: string,
      public password?: string,
      public firstname?: string,
      public lastname?: string,
      public companyName?: string,
      public email?: string,
      public resaleNumber?: string,
      public addressLine1?: string,
      public addressLine2?: string,
      public addressCity?: string,
      public addressState?: string,
      public addressZip?: string,
      public mainPhone?: string,
      public workPhone?: string,
      public faxNumber?: string,
      public hasQuickBooksAccount?: boolean,
      public authorities?: string[]
  ) {}
}
