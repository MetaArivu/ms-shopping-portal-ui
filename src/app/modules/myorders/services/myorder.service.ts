import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyOrderModel } from "../model/myorder.model";

@Injectable({ providedIn: 'root' })
export class MyOrderService {

    constructor(private http: HttpClient) {

    }

    fetchMyOrders() {
        return this.http.get<MyOrderModel[]>("assets/data/myorder.json");
    }
}
