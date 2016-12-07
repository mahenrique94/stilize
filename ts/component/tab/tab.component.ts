/// <reference path="../../interface/component.ts"/>

class Tab implements Component {

    public toggle(obj : HTMLObjectElement) : void {
        if (!obj.classList.contains('is-active')) {      
            this._isActiveTab(obj);
            this._showBody(obj);
        }
    }

    private _isActiveTab(obj : HTMLObjectElement) : void {
        this._isInactiveTab(obj.parentNode.parentNode.querySelector('.is-active'));        
        obj.setAttribute('aria-selected', 'true');
        obj.classList.add('is-active');
        obj.classList.remove('is-inactive');                
    }

    private _isInactiveTab(obj : HTMLObjectElement) : void {
        obj.setAttribute('aria-selected', 'false');
        obj.classList.add('is-inactive');
        obj.classList.remove('is-active');
    }

    private _showBody(obj : HTMLObjectElement) : void {        
        let body = this._findBody(obj);
        this._hideBody(body.parentNode.querySelector('.is-show'));
        body.setAttribute('aria-expanded', 'true');
        body.setAttribute('aria-hidden', 'false');
        body.classList.add('is-show');
        body.classList.remove('is-hide');        
    }

    private _hideBody(obj : HTMLObjectElement) : void {
        obj.setAttribute('aria-expanded', 'false');
        obj.setAttribute('aria-hidden', 'true');
        obj.classList.add('is-hide');
        obj.classList.remove('is-show');
    }

    private _findBody(obj : HTMLObjectElement) : HTMLObjectElement {
        return obj.parentNode.parentNode.parentNode.querySelector(obj.getAttribute('href'));
    }
 
}