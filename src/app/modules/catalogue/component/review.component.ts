import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { switchMap } from "rxjs";
import { ProductDetails, ProductDetailsResponse } from "../model/catalogue.model";
import { CatalogueService } from "../services/catalogue.service";

@Component({
    selector :'review',
    templateUrl : './review.component.html',
    styleUrls : ['./review.component.css']
})
export class ReviewComponent implements OnInit {

    prodDetails: ProductDetails;
    loader : boolean = false;
    constructor(private catalogueSvc: CatalogueService, private router: Router, private route: ActivatedRoute) {
        this.prodDetails = new ProductDetails();
    }

    ngOnInit(){
        this.fetchProductInfo( this.route.snapshot.paramMap.get('id')?.toString());
    }

    fetchProductInfo(id:any){
        console.log("id={}",id);
        this.loader = true;
        this.catalogueSvc.fetchProductDetails(id)
            .subscribe((prodDetails: ProductDetailsResponse)=>{
               console.log("prodDetails={}",prodDetails);
               this.prodDetails = prodDetails.data;
               this.loader = false;
            });
    }

    mainPage(){
        this.router.navigate(['/home/catalogue/']);
    }
}