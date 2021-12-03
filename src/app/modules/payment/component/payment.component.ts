import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    paymentForm: FormGroup;

    loader: boolean = false;

    constructor(private router: Router) {
        this.paymentForm = new FormGroup({
            userName: new FormControl(null, [Validators.required]),
            cardNo: new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
            cvv: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
        });
    }

    ngOnInit() {

    }

    makePayment() {
        this.loader = true;
        setTimeout(() => {
            this.router.navigate(['/home/myorders']);
        }, 1000);
    }

    myCart() {
        this.loader = true;
        setTimeout(() => {
            this.router.navigate(['/home/cart']);
        }, 1000);
    }
}