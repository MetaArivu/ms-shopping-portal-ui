export class MyCartModel {
    id: string;
    itemId: string;
    itemName: string;
    qty: number;
    price: number;
    img: string;

    constructor(id: string,  itemId: string,  itemName: string, qty: number,  price: number,  img: string) {

            this.id = id;
            this.img = img;
            this.itemId = itemId;
            this.itemName = itemName;
            this.price = price;
            this.qty = qty;
    }
}