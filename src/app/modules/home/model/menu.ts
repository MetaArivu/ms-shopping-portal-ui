export class Menu {
    title: string;
    icon: string;
    routeLink: string;
    constructor(menu: string, icon: string, routeLink: string){
        this.title = menu;
        this.icon = icon;
        this.routeLink = routeLink;
    }
}