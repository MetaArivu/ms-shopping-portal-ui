export class CatalogueModel {
    title: string;
    id: string;
    desc: string;
    price: number;
    img: string;
    loader : boolean = false;
    constructor(title: string, id: string, desc: string, price: number, img: string) {
        this.desc = desc;
        this.id = id;
        this.price = price;
        this.title = title;
        this.img = img;
    }

}