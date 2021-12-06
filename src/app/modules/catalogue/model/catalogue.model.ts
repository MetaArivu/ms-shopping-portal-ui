
export class CatalogueResponseModel {
    success : boolean = false;
    message : string = "";
    data : CatalogueModel [] = [];
}

export class CatalogueModel {
    name: string = "";
    id: string = "";
    description: string = "";
    price: number = 0.0;
    image: string  = "";
    loader : boolean = false;
}