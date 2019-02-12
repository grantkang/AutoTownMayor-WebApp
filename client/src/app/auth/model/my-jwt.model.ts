export class MyJwt {
  constructor(
      public exp: number,
      public username: string,
      public permissions: string[]
  ) {}
}
