import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { AuthResponse } from "../model/auth-response.model";
import { UserService } from "../service/user.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loader: boolean = false;

    constructor( private cookieService: CookieService,private userService: UserService, private _snackBar: MatSnackBar, private router: Router) {
        this.loginForm = new FormGroup({
            userName: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
        });
    }

    ngOnInit() {
        this.cookieService.deleteAll('/');
    }

    onSubmit() {
        this.authenticate(this.loginForm.value.userName, this.loginForm.value.password)
    }

    private authenticate(userName: string, password: string) {
        this.loader = true;
        let authResponse: AuthResponse;
        this.userService
            .authenticate(userName, password)
            .subscribe(
                (response: AuthResponse) => {
                    authResponse = response;
                },
                (error) => {
                    debugger;
                    console.log("Authentication error=", error);
                    this.loader = false;
                    this._snackBar.open(error.error.message, "Error", { duration: 2000, panelClass: ["error"], })
                },
                () => {
                    console.log("Auth Response=", authResponse);
                    setTimeout(() => {
                        this.loader = false;
                        if (authResponse.success) {
                            this.cookieService.set('customtoken', authResponse.data.token, 1,'/'); 
                            this._snackBar.open("Authenticated", "Success", { duration: 2000, panelClass: ["success"], })
                            this.router.navigate(['/home']);
                        } else {
                            this._snackBar.open("Please enter valid username and password", "Error", { duration: 2000, panelClass: ["error"], })
                        }
                    }, 1000);
                    

                }
            );
    }

    createAccount(){
        this.router.navigate(['/user/add']);
    }
}
