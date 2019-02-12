export class NewUserRequest {
  constructor(
      public username?: string,
      public unhashedPassword?: string,
      public firstName?: string,
      public lastName?: string,
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
      public faxNumber?: string
  ) {}
}
