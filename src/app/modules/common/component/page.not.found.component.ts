import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector :'pagenotfound',
    templateUrl:'./page.not.found.component.html',
    styleUrls : ['./page.not.found.component.css']
})
export class PageNotFoundComponent implements OnInit {

    constructor(private router: Router){

    }

    ngOnInit() {

    }

    mainPage(){
        this.router.navigate(['/']);
    }
}