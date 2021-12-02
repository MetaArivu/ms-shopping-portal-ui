import { Component, OnInit } from "@angular/core";
import { MyCartModel } from "../model/mycart.model";
import { MyCartService } from "../services/mycart.service";

@Component({
    selector : 'mycart',
    templateUrl : './mycart.component.html'
})
export class MyCartComponent implements OnInit {

    myCart: MyCartModel[];

    constructor(private mycartService: MyCartService) {
        this.myCart = [];
    }

    ngOnInit(){
        this.fetchMyCartDetails();
    }

    private fetchMyCartDetails(){
        this.mycartService
            .fetchMyCart()
            .subscribe((myCart: MyCartModel[])=>{
                this.myCart = myCart;
            })
    }
}