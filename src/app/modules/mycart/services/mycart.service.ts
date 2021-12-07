import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { MyCartModel, MyCartResponse } from "../model/mycart.model";

@Injectable({ providedIn: 'root' })
export class MyCartService {

    constructor(private http: HttpClient, private cookieService: CookieService) {

    }

    fetchMyCart() {
        const url = environment.cartQueryService + environment.myCart + "61ae0189953ea2617e5dedb1";
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('customtoken')
            })
        };
        return this.http.get<MyCartResponse>(url, httpOptions);
    }
}
