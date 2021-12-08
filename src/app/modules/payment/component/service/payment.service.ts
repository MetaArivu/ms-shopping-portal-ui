import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { MyCartCheckOutResponseModel, MyCartResponse } from "src/app/modules/mycart/model/mycart.model";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class PaymentService {

    constructor(private http: HttpClient, private cookieService: CookieService) {

    }

    fetchCartPayment() {
        const url = environment.cartQueryService + environment.myCart;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('customtoken')
            })
        };
        return this.http.get<MyCartResponse>(url, httpOptions);
    }


    makePayment(orderId: string, cartId: string, customerId: string, total: number) {
        const req = { 'orderId':orderId, 'cartId':cartId, 'customerId':customerId, 'total':total};

        const url = environment.paymentService + environment.makePayment;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('customtoken')
            })
        };
        return this.http.post<MyCartResponse>(url, req, httpOptions);
    }


}
