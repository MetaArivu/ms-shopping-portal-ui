export class MyOrderModel {
    id: string;
    orderNo: string;
    orderDate: string;
    total: number;
    success: boolean;

    constructor(id: string,  orderNo: string,  orderDate: string, total: number,  success: boolean) {

            this.id = id;
            this.orderNo = orderNo;
            this.orderDate = orderDate;
            this.total = total;
            this.success = success;
    }
}