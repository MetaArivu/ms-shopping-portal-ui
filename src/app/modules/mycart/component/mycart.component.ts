import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
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
    displayedColumns: string[] = ['itemName', 'price','qty','total','action'];
    totalAmount: number;
    loader: boolean = false;

    constructor(private _snackBar: MatSnackBar,private mycartService: MyCartService, private router : Router) {
        this.myCart = [];
        this.totalAmount = 0;
    }

    ngOnInit(){
        this.fetchMyCartDetails();
    }

    fetchMyCartDetails(){
        this.loader = true;
        this.myCart = [];
        this.totalAmount = 0;
        this.mycartService
            .fetchMyCart()
            .subscribe((_myCart: MyCartResponse)=>{
                if(_myCart.success){
                    _myCart.data.forEach(_data =>{
                        _data.lineItems.forEach(lineItem =>{
                            let model : MyCartLineItemsModel  = new MyCartLineItemsModel(lineItem.itemId,lineItem.itemName,lineItem.qty,lineItem.unitPrice,lineItem.img,lineItem.totalPrice);
                            if(model.qty >0)
                            {
                                this.totalAmount = this.totalAmount + model.totalPrice;
                                this.myCart.push(model);
                            }
                            
                        });
                    })
                }
                 
            },(error)=>{

            },()=>{
                this.loader = false;
            }); 
    }

    removeItem(item: MyCartLineItemsModel){
        this.loader = true;
        this.mycartService
            .removeItemFromMyCart(item.itemId)
            .subscribe((_myCart: MyCartResponse)=>{
                if(_myCart.success){
                    setTimeout(() => {
                        this.fetchMyCartDetails();
                        this._snackBar.open(_myCart.message, "Success", { duration: 2000, panelClass: ["success"], });
                        this.loader = false;
                    }, 1000);
                    
                }
                 
            },(error)=>{
                this.loader = false;
            },()=>{
               
            }); 
    }

    proceedToPayment(){
        this.loader = true;
        setTimeout(() => {
            this.router.navigate(['/home/payment']);
        }, 1000);
    }
}