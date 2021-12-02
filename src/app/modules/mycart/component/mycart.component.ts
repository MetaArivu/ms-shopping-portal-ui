import { Component, OnInit } from "@angular/core";
import { MyCartModel } from "../model/mycart.model";
import { MyCartService } from "../services/mycart.service";

@Component({
    selector : 'mycart',
    templateUrl : './mycart.component.html',
    styleUrls:['./mycart.component.css']
})
export class MyCartComponent implements OnInit {

    myCart: MyCartModel[];
    displayedColumns: string[] = ['itemName', 'price','qty','total'];
    totalAmount: number;
    constructor(private mycartService: MyCartService) {
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
            .subscribe((_myCart: MyCartModel[])=>{
                _myCart.forEach(cart=>{
                    let model : MyCartModel  = new MyCartModel(cart.id,cart.itemId,cart.itemName,cart.desc,cart.qty,cart.price,cart.img);
                    this.totalAmount = this.totalAmount + model.total;
                    this.myCart.push(model);
                 });
            }); 
    }
}