import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AddToCartResponse, CatalogueModel, CatalogueResponseModel } from "../model/catalogue.model";
import { CatalogueService } from "../services/catalogue.service";

@Component({
    selector : 'catalogue',
    templateUrl:'./catalogue.component.html',
    styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

    catalogueItems: CatalogueModel[] = [];
    loader : boolean = false;

    constructor(private catalogueService: CatalogueService,private _snackBar: MatSnackBar, private route: Router){

    }

    ngOnInit() {
       this.fetchAllCatlogueItems();
    }

    private fetchAllCatlogueItems(){
        this.catalogueService
        .fetchAllCatlogueItems()
        .subscribe((catalogueResponse: CatalogueResponseModel)=>{
            this.catalogueItems = catalogueResponse.data;
        })
    }

    addToCart(item: CatalogueModel){
        item.loader = true;
        this.catalogueService
            .addToCart(item.id, 1)
            .subscribe((response : AddToCartResponse) => {
                item.loader  = false;
                this._snackBar.open(response.message, response.success ? "Success":"Error", { duration: 2000, panelClass: [response.success ? "success":"error"], })
            },(error) =>{
                item.loader  = false;
                this._snackBar.open("Item Cannot Be Added to Cart!", "Error", { duration: 2000, panelClass: "error", })
            });
        
    }

    review(item: CatalogueModel){
        console.log(item);
        this.route.navigate(['/home/catalogue/review/',item.id]);
    }
}