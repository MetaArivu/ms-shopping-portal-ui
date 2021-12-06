import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { CatalogueModel, CatalogueResponseModel } from "../model/catalogue.model";

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
        //return new AuthResponse(true, "User Authenticated Successfully!", new Date().getTime() + "");
    }
}
