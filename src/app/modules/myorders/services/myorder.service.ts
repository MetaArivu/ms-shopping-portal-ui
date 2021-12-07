import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { MyOrderModel, MyOrderResponseModel } from "../model/myorder.model";

@Injectable({ providedIn: 'root' })
export class MyOrderService {

    constructor(private http: HttpClient, private cookieService: CookieService) {

    }

    fetchMyOrders() {
        const url  = environment.orderService+environment.orderByUserId;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Authorization': this.cookieService.get('customtoken')
            })
          };
        return this.http.get<MyOrderResponseModel>(url,httpOptions);
    }
}
