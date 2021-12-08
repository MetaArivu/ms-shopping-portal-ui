import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { MyCartCheckOutResponseModel, MyCartResponse } from "../model/mycart.model";
import { MyCartService } from "../services/mycart.service";

@Component({
    selector: 'checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckOutComponent implements OnInit {

    myCart: MyCartCheckOutResponseModel;
    displayedColumns: string[] = ['itemName', 'price', 'qty', 'total'];
    loader: boolean = false;
    totalAmount: number = 0;
    constructor(private _snackBar: MatSnackBar, private mycartService: MyCartService, private router: Router) {
        this.myCart = new MyCartCheckOutResponseModel();
    }

    ngOnInit() {
        this.fetchCheckOutCartDetails();
    }

    fetchCheckOutCartDetails() {
        this.loader = true;
        this.mycartService
            .fetchCheckOutCartDetails()
            .subscribe((response: MyCartCheckOutResponseModel) => {
                console.log(response);
                this.myCart = response;
                this.totalAmount = response.data.total;
                this.loader = false;
            });
    }

    proceedToPayment() {
        this.router.navigate(['/home/payment/'],{queryParams:{'id':this.myCart.data.id}});
    }
}