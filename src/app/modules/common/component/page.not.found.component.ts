import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
    selector :'pagenotfound',
    templateUrl:'./page.not.found.component.html',
    styleUrls : ['./page.not.found.component.css']
})
export class PageNotFoundComponent implements OnInit {

    constructor(private router: Router, private cookieService: CookieService){

    }

    ngOnInit() {

    }

    mainPage(){
        this.cookieService.deleteAll();
        this.router.navigate(['/']);
    }
}