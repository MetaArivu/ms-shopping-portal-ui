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
            password: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
        });
    }

    ngOnInit() {

    }

    onSubmit(){
        
    }
}