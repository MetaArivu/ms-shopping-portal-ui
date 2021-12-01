import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Menu } from "../model/menu";

@Component({
    selector : 'home',
    templateUrl : './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    menus : Menu[] = [];

    constructor(private router: Router) {

        this.menus = [];
        this.menus.push(new Menu("Catalog","category","/catalog"));
        this.menus.push(new Menu("My Cart","shopping_cart","/mycart"));
        this.menus.push(new Menu("My Orders","list_alt","/myorders" ));
        
    }

    ngOnInit() {

    }

    onMenuClick(menu: Menu){
        console.log(menu);
        this.router.navigate([menu.routeLink]);
    }

    logout(){
        this.router.navigate(['/']);
    }
}