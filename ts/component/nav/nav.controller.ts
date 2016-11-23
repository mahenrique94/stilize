/// <reference path="./nav.component.ts"/>

class NavController {
    
    _nav : Nav = new Nav();

    dropdown(target : HTMLObjectElement) : void {        
        this._nav.toggle(target.parentNode.getElementsByTagName('ul')[0]);
    }

}