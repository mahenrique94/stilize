/// <reference path="./nav.component.ts"/>

class NavController {
    
    private _nav : Nav = new Nav();

    public dropdown(link : HTMLObjectElement, event : Event) : void {   
        event.preventDefault();     
        this._nav.toggle(link);
    }

}