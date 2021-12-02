import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MyCartModel } from "../model/mycart.model";

@Injectable({ providedIn: 'root' })
export class MyCartService {

    constructor(private http: HttpClient) {

    }

    fetchMyCart() {
        return this.http.get<MyCartModel[]>("assets/data/mycart.json");
    }
}
