import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Menu } from "../model/menu";

@Component({
    selector : 'home',
    templateUrl : './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    menus : Menu[] = [];

    constructor(private cookieService: CookieService, private router: Router) {
        this.menus = [];
        this.menus.push(new Menu("Catalog","category","home/catalogue"));
        this.menus.push(new Menu("My Cart","shopping_cart","home/cart"));
        this.menus.push(new Menu("My Orders","list_alt","home/myorders" ));
        
    }

    ngOnInit() {
        this.onMenuClick(this.menus[0]);
    }

    onMenuClick(menu: Menu){
        this.menus.forEach(m=>{
            m.active = false;
            if(m.routeLink === menu.routeLink){
                m.active = true;
            }
        })
        //console.log(menu);
        //console.log(this.cookieService.get('customtoken'));
        this.router.navigate([menu.routeLink]);
       
    }

    logout(){
        this.cookieService.deleteAll();
        this.router.navigate(['/']);
    }
}