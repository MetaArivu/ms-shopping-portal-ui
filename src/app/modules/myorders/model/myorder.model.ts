export class MyOrderResponseModel {
    success: boolean = false;
    message: string = "";
    data : MyOrderModel [] = [];
       
}

export class MyOrderModel{
    id: string ="";
    orderNo: string ="";
    orderDate: Date = new Date();
    total: number = 0;
    paymentStatus: boolean = false;
    lineItems : any; 
}