import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../model/auth-response.model";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {

    }
    authenticate(userName: string, password: string) {
        const url = environment.userService+environment.loginUrl;
        const req = {'loginId':userName,'password':password};
        
        return this.http.post<AuthResponse>(url,req);
        //return new AuthResponse(true, "User Authenticated Successfully!", new Date().getTime() + "");
    }
}