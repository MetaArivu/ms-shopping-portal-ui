import { Component, OnInit } from "@angular/core";
import { MyOrderModel } from "../model/myorder.model";
import { MyOrderService } from "../services/myorder.service";

@Component({
    selector : 'myorder',
    templateUrl : './myorder.component.html'
})
export class MyOrderComponent implements OnInit {

    myOrder: MyOrderModel[];

    constructor(private myOrderService: MyOrderService) {
        this.myOrder = [];
    }

    ngOnInit(){
        this.fetchMyCartDetails();
    }

    private fetchMyCartDetails(){
        this.myOrderService
            .fetchMyOrders()
            .subscribe((myOrder: MyOrderModel[])=>{
                this.myOrder = myOrder;
            })
    }
}