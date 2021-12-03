import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CatalogueModel } from "../model/catalogue.model";
import { CatalogueService } from "../services/catalogue.service";

@Component({
    selector : 'catalogue',
    templateUrl:'./catalogue.component.html',
    styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

    catalogueItems: CatalogueModel[] = [];
    loader : boolean = false;

    constructor(private catalogueService: CatalogueService,private _snackBar: MatSnackBar){

    }

    ngOnInit() {
       this.fetchAllCatlogueItems();
    }

    private fetchAllCatlogueItems(){
        this.catalogueService
        .fetchAllCatlogueItems()
        .subscribe((catalogueItems: CatalogueModel[])=>{
            this.catalogueItems = catalogueItems;
        })
    }

    addToCart(item: CatalogueModel){
        item.loader = true;
        setTimeout(() => {
            item.loader  = false;
            this._snackBar.open("Item Added To Cart Successfully !", "Success", { duration: 2000, panelClass: ["success"], })

        }, 1000);
    }
}