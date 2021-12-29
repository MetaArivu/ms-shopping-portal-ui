// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  
  userService : "/user-svc",
  prodService : "/product-service",
  cartCmdService : "/shopping-cart-cmd-service",
  cartQueryService : "/shopping-cart-query-service",
  paymentService : "/payment-service",
  orderService : "/order-service",

  loginUrl : "/api/v1/login",
  registerUserUrl : "/api/v1/register",
  loginUserInfoUrl : "/api/v1/login/userinfo",

  allProducts : "/api/v1/",

  addToCart : "/api/v1/add",
  removeFromCart : "/api/v1/remove",
  checkout: "/api/v1/checkout",
  
  myCart : "/api/v1/",

  makePayment : "/api/v1/",

  orderByUserId : "/api/v1/",
  checkOutOrderByUserId : "/api/v1/checkout"
};
