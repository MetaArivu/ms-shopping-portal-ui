// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  userService : "http://localhost:6061/user-service",
  prodService : "http://localhost:6062/product-service",
  cartCmdService : "http://localhost:6064/shopping-cart-cmd-service",
  cartQueryService : "http://localhost:6066/shopping-cart-query-service",
  paymentService : "http://localhost:6068/payment-service",
  orderService : "http://localhost:6069/order-service",

  loginUrl : "/api/v1/login",
  registerUserUrl : "/api/v1/register",
  loginUserInfoUrl : "/api/v1/login/userinfo",

  allProducts : "/api/v1/",

  addToCart : "/api/v1/add",
  removeFromCart : "/api/v1/remove",

  myCart : "/api/v1/",

  makePayment : "/api/v1/",

  orderByUserId : "/api/v1/"
};
