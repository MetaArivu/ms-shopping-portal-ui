import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CatalogueModel } from "./catalogue.model";

@Injectable({ providedIn: 'root' })
export class CatalogueService {

    constructor(private http: HttpClient) {

    }

    fetchAllCatlogueItems() {
        return this.http.get<CatalogueModel[]>("assets/data/catalogue.json");
        //return new AuthResponse(true, "User Authenticated Successfully!", new Date().getTime() + "");
    }
}