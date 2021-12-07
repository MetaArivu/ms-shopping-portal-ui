import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { MyCartLineItemsModel, MyCartResponse } from "../../mycart/model/mycart.model";
import { PaymentService } from "./service/payment.service";

@Component({
    selector: 'payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

    paymentForm: FormGroup;
    loader: boolean = false;
    totalAmount : number = 0;
    cartId : string = "";
    customerId : string = "";

    constructor(private _snackBar: MatSnackBar, private router: Router, private paymentSvc: PaymentService) {
        this.paymentForm = new FormGroup({
            userName: new FormControl(null, [Validators.required]),
            cardNo: new FormControl(null, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
            cvv: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)])
        });
    }

    ngOnInit() {
        this.myCart()
    }

    makePayment() {
        this.loader = true;
        this.paymentSvc
            .makePayment(this.cartId,this.customerId,this.totalAmount)
            .subscribe((_myCart: MyCartResponse)=>{
                if(_myCart.success){ 
                    this._snackBar.open("Payment Proceed Successfully", "Success", { duration: 2000, panelClass: ["success"], });
                    this.router.navigate(['/home/myorders']);
                }
                this.loader = false;
            },(error)=>{
                this._snackBar.open("Payment Cannot Be Proceed", "Error", { duration: 2000, panelClass: ["error"], });
                this.loader = false;

            },()=>{
                
            }); 
    }

    


    myCart(){
        this.loader = true;
        this.totalAmount = 0;
        this.paymentSvc
            .fetchMyCart()
            .subscribe((_myCart: MyCartResponse)=>{
                if(_myCart.success){
                    _myCart.data.forEach(_data =>{
                        this.cartId = _data.id;
                        this.customerId = _data.customerId;
                        _data.lineItems.forEach(lineItem =>{
                            let model : MyCartLineItemsModel  = new MyCartLineItemsModel(lineItem.itemId,lineItem.itemName,lineItem.qty,lineItem.unitPrice,lineItem.img,lineItem.totalPrice);
                            if(model.qty >0)
                            {
                                this.totalAmount = this.totalAmount + model.totalPrice;
                            }
                            
                        });
                    })
                }
                 
            },(error)=>{

            },()=>{
                this.loader = false;
            }); 
    }

}