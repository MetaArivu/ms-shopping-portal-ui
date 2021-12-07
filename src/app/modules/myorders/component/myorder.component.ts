import { Component, OnInit } from "@angular/core";
import { MyOrderModel, MyOrderResponseModel } from "../model/myorder.model";
import { MyOrderService } from "../services/myorder.service";

@Component({
    selector : 'myorder',
    templateUrl : './myorder.component.html',
    styleUrls : ['./myorder.component.css']
})
export class MyOrderComponent implements OnInit {

    myOrder: MyOrderModel[];
    displayedColumns: string[] = ['orderNo', 'orderDate','paymentStatus','total'];
    totalAmount: number;
    loader : boolean = false;
    constructor(private myOrderService: MyOrderService) {
        this.myOrder = [];
        this.totalAmount = 0;
    }

    ngOnInit(){
        this.loader = true;
        setTimeout(() => {
            this.fetchMyOrderDetails();
        }, 1000);
        
    }

    private fetchMyOrderDetails(){
        this.loader = true;
        this.totalAmount = 0;
        this.myOrder = [];
        this.myOrderService
            .fetchMyOrders()
            .subscribe((_myOrder: MyOrderResponseModel)=>{
                if(_myOrder.success){
                    _myOrder.data.forEach((order)=>{
                        this.totalAmount = this.totalAmount + order.total;
                        this.myOrder.push(order);
                    })
                }
                this.loader = false;
            })
    }
}