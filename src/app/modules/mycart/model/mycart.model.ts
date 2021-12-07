export class MyCartResponse {
    success : boolean = true;
    message : string = "";
    data : MyCartModel [] = [];
}


export class MyCartModel {
    id: string = "";
    customerId: string = "";
    lineItems : MyCartLineItemsModel [] = [];
}

export class MyCartLineItemsModel {
    
    itemId: string = "";
    itemName: string = "";
    qty: number = 0;
    unitPrice: number = 0;
    img: string  = "";
    totalPrice : number = 0;
    
    constructor(itemId: string, itemName: string, qty: number, unitPrice: number,  img: string,totalPrice : number){
        this.img = img;
        this.itemId = itemId;
        this.itemName = itemName;
        this.qty  = qty;
        this.unitPrice = unitPrice;
        this.totalPrice = totalPrice;
    }
}