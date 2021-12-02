export class MyCartModel {
    id: string;
    itemId: string;
    itemName: string;
    desc: string;
    qty: number;
    price: number;
    img: string;
    total : number = 0;
    constructor(id: string,  itemId: string,  itemName: string, desc: string, qty: number,  price: number,  img: string) {

            this.id = id;
            this.img = img;
            this.itemId = itemId;
            this.itemName = itemName;
            this.price = price;
            this.qty = qty;
            this.desc = desc;
            this.total = this.price * this.qty;
            console.log(this);
    }
 
}