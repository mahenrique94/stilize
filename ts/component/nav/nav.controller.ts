/// <reference path="./nav.component.ts"/>

class NavController {
    
    private _nav : Nav = new Nav();

    public dropdown(target : HTMLObjectElement, event : Event) : void {   
        event.preventDefault();     
        this._nav.toggle(target.parentNode.getElementsByTagName('ul')[0]);
    }

}