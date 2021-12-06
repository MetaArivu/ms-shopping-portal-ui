
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

export class ProductDetailsResponse {
    success : boolean = false;
    message: string = "";
    data: ProductDetails = new ProductDetails();
}

export class ProductDetails {
    name: string = "";
    id: string = "";
    description: string = "";
    price: number = 0.0;
    image: string  = "";
    review : ProductReview = new ProductReview();
}

export class ProductReview { 
    reviewFetched : boolean = false;
    reviewPresent : boolean = false;
    reviews : Reviews [] = []; 
}

export class Reviews {
    id : string = "";
    productId : string = "";
    reviewerName : string = "";
    description : string = "";
    rating : number = 0;
}