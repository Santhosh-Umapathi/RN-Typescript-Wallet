//To fix local assets imports error on typescript
declare module ".*png" {
  const value: any;
  export = value;
}

declare module ".*jpg" {
  const value: any;
  export = value;
}
