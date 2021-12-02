import { Component, OnInit } from "@angular/core";
import { CatalogueModel } from "../model/catalogue.model";
import { CatalogueService } from "../services/catalogue.service";

@Component({
    selector : 'catalogue',
    templateUrl:'./catalogue.component.html',
    styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

    catalogueItems: CatalogueModel[] = [];
    constructor(private catalogueService: CatalogueService){

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
}