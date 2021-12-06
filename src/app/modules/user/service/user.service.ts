import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpResponse } from "../../common/model/response.model";
import { AuthResponse } from "../model/auth-response.model";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {

    }

    authenticate(userName: string, password: string) {
        const url = environment.userService+environment.loginUrl;
        const req = {'loginId':userName,'password':password};
        return this.http.post<AuthResponse>(url,req);
    }

    register(userDetails: any) {
        const url  = environment.userService+environment.registerUserUrl;
        const req = {
            "loginId":userDetails.userName,
            "password":userDetails.password,
            "firstName":userDetails.firstName,
            "middleName":userDetails.middleName,
            "lastName":userDetails.lastName,
            "email": userDetails.email,
            "age":38,
            "dob":userDetails.  dob
        };
        console.log("Req={}",req);
        return this.http.post<HttpResponse>(url,req);
    }

}