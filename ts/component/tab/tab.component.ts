/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="../../interface/component.ts"/>

class Tab implements Component {

    public toggle(obj : HTMLObjectElement) : void {
        if (!obj.classList.contains("is-active")) {      
            this._isActiveTab(obj);
            this._showBody(obj);
        }
    }

    private _isActiveTab(obj : HTMLObjectElement) : void {
        this._isInactiveTab(obj.parentNode.parentNode.querySelector(".is-active"));        
        obj.setAttribute("aria-selected", "true");
        obj.classList.add("is-active");                
    }

    private _isInactiveTab(obj : HTMLObjectElement) : void {
        obj.setAttribute("aria-selected", "false");
        obj.classList.remove("is-active");
    }

    private _showBody(obj : HTMLObjectElement) : void {        
        const body = this._findBody(obj);
        ObjectHelper.hide(body.parentNode.querySelector(".is-show"));
        ObjectHelper.show(body);        
    }

    private _findBody(obj : HTMLObjectElement) : HTMLObjectElement {
        return obj.parentNode.parentNode.parentNode.querySelector(obj.getAttribute("href"));
    }
 
}