import { Component, OnInit } from "@angular/core";
import { MyOrderModel } from "../model/myorder.model";
import { MyOrderService } from "../services/myorder.service";

@Component({
    selector : 'myorder',
    templateUrl : './myorder.component.html',
    styleUrls : ['./myorder.component.css']
})
export class MyOrderComponent implements OnInit {

    myOrder: MyOrderModel[];
    displayedColumns: string[] = ['orderNo', 'orderDate','success','total'];
    totalAmount: number;

    constructor(private myOrderService: MyOrderService) {
        this.myOrder = [];
        this.totalAmount = 0;
    }

    ngOnInit(){
        this.fetchMyOrderDetails();
    }

    private fetchMyOrderDetails(){
        this.totalAmount = 0;
        this.myOrder = [];
        this.myOrderService
            .fetchMyOrders()
            .subscribe((_myOrder: MyOrderModel[])=>{
                _myOrder.forEach((order)=>{
                    let model : MyOrderModel  = new MyOrderModel(order.id,order.orderNo, order.orderDate,order.total,order.success);
                    this.totalAmount = this.totalAmount + model.total;
                    this.myOrder.push(model);
                });
                console.log(this.myOrder);
                //this.myOrder = myOrder;
            })
    }
}