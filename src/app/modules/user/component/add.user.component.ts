import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";

@Component({
    selector: 'adduser',
    templateUrl: './add.user.component.html',
    styleUrls: ['./add.user.component.css']
})


export class AddUserComponent implements OnInit {

    userForm: FormGroup;
    loader: boolean = false;

    constructor(private userService: UserService, private _snackBar: MatSnackBar, private router: Router) {

        this.userForm = new FormGroup({
            userName: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
            confirmPassword: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),

            firstName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
            middleName: new FormControl(null, []),
            lastName: new FormControl(null, [Validators.required, Validators.minLength(1)]),

            email: new FormControl(null, [Validators.required, Validators.email]),
            phone: new FormControl(null, [Validators.required]),

            dob: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),

        });
    }

    ngOnInit() {

    }

    onSubmit() {
        if (!this.userForm.valid) {
            this._snackBar.open("Please enter valid data for account creation!", "Error", { duration: 2000 })
        } else {
            this.loader = true;
            setTimeout(() => {
                this.router.navigate(['/']);
                console.log(this.userForm.value);
                this._snackBar.open("Account created successfully!", "Success", { duration: 2000 })

            }, 1000);
        }

    }

    reset() {
        this.userForm.reset();
    }

    home() {
        this.router.navigate(['/']);
    }
}