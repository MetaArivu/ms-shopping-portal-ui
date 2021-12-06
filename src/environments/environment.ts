// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  userService : "http://localhost:6061/user-service",
  prodService : "http://localhost:6062/product-service",
  
  loginUrl : "/api/v1/login",
  registerUserUrl : "/api/v1/register",

  allProducts : "/api/v1/"
};
