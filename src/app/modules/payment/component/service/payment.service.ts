import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { MyCartResponse } from "src/app/modules/mycart/model/mycart.model";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class PaymentService {

    constructor(private http: HttpClient, private cookieService: CookieService) {

    }

    fetchMyCart() {
        const url = environment.cartQueryService + environment.myCart;
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('customtoken')
            })
        };
        return this.http.get<MyCartResponse>(url, httpOptions);
    }


    makePayment(cartId: string, customerId: string, total: number) {
        const req = { 'cartId':cartId, 'customerId':customerId, 'total':total};

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
