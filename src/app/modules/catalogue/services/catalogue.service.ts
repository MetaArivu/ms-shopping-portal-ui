import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { AddToCartResponse, CatalogueModel, CatalogueResponseModel } from "../model/catalogue.model";

@Injectable({ providedIn: 'root' })
export class CatalogueService {

    constructor(private http: HttpClient, private cookieService: CookieService) {

    }

    

    fetchAllCatlogueItems() {
        const url  = environment.prodService+environment.allProducts;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': this.cookieService.get('customtoken')
            })
          };
        return this.http.get<CatalogueResponseModel>(url,httpOptions);
    }

    addToCart(itemId : string,qty: number){
      const req = {'itemId':itemId,'qty':qty};
      const url  = environment.cartCmdService+environment.addToCart;
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.cookieService.get('customtoken')
          })
        };
      return this.http.post<AddToCartResponse>(url,req,httpOptions);
    }

    fetchProductDetails(id: string) {
      const url  = environment.prodService+environment.allProducts+id;
      const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': this.cookieService.get('customtoken')
          })
        };
      return this.http.get<any>(url,httpOptions);
  }
}
