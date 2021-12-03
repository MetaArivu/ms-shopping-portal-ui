import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable()
export class AuthGaurdService implements CanActivate {

    constructor(private router: Router, private cookieService: CookieService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let cookieValue: string = this.cookieService.get("customtoken");
        if (cookieValue != undefined && cookieValue.length > 0)
            return true;
        else {
            this.router.navigate(['/']);
            return false;
        }
    }


}