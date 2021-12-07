import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MyCartLineItemsModel, MyCartModel, MyCartResponse } from "../model/mycart.model";
import { MyCartService } from "../services/mycart.service";

@Component({
    selector : 'mycart',
    templateUrl : './mycart.component.html',
    styleUrls:['./mycart.component.css']
})
export class MyCartComponent implements OnInit {

    myCart: MyCartLineItemsModel[];
    displayedColumns: string[] = ['itemName', 'price','qty','total'];
    totalAmount: number;
    loader: boolean = false;

    constructor(private mycartService: MyCartService, private router : Router) {
        this.myCart = [];
        this.totalAmount = 0;
    }

    ngOnInit(){
        this.fetchMyCartDetails();
    }

    private fetchMyCartDetails(){
        this.myCart = [];
        this.totalAmount = 0;
        this.mycartService
            .fetchMyCart()
            .subscribe((_myCart: MyCartResponse)=>{
                if(_myCart.success){
                    _myCart.data.forEach(_data =>{
                        _data.lineItems.forEach(lineItem =>{
                            let model : MyCartLineItemsModel  = new MyCartLineItemsModel(lineItem.itemId,lineItem.itemName,lineItem.qty,lineItem.unitPrice,lineItem.img,lineItem.totalPrice);
                            this.totalAmount = this.totalAmount + model.totalPrice;
                            this.myCart.push(model);
                        });
                    })
                }
                 
            }); 
    }

    proceedToPayment(){
        this.loader = true;
        setTimeout(() => {
            this.router.navigate(['/home/payment']);
        }, 1000);
    }
}