import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthResponse } from "../model/auth-response.model";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {

    }
    authenticate(userName: string, password: string) {
        return this.http.get<AuthResponse>("assets/data/auth.json");
        //return new AuthResponse(true, "User Authenticated Successfully!", new Date().getTime() + "");
    }
}