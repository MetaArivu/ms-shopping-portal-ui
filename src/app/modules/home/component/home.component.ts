import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'home',
    templateUrl : './home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(private route: Router) {

    }

    ngOnInit() {

    }
}