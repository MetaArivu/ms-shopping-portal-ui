import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { LoginUserInfoResponse } from "../model/login.user.info";
import { Menu } from "../model/menu";
import { HomeService } from "../service/home.service";

@Component({
    selector : 'home',
    templateUrl : './home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

    userName : string;

    menus : Menu[] = [];

    constructor(private cookieService: CookieService, private router: Router, private homeService: HomeService) {
        this.menus = [];
        this.menus.push(new Menu("Catalog","category","home/catalogue"));
        this.menus.push(new Menu("My Cart","shopping_cart","home/cart"));
        this.menus.push(new Menu("My Orders","list_alt","home/myorders" ));
        this.userName = "";
    }

    ngOnInit() {
        this.fetchLoginUserInfo();
        this.onMenuClick(this.menus[0]);
    }

    fetchLoginUserInfo(){
        this.homeService
            .fetchLoginUserInfo()
            .subscribe((response: LoginUserInfoResponse)=>{
                if(response.success){
                    this.userName = response.data.firstName +" "+response.data.lastName;
                }
                console.log(response);
            });

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