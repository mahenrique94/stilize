/// <reference path="../../base/controller.helper.ts"/>
/// <reference path="../../interface/component.ts"/>

class Nav implements Component {

    public toggle(obj : HTMLObjectElement) : void {
        let target : HTMLObjectElement = obj.parentNode.getElementsByTagName('ul')[0] || obj.parentNode.getElementsByTagName('menu')[0];
        if (this._isHide(target) && this._hasController(obj))
            this._show(target);
        else
            this._hide(target);
    }

    private _show(obj : HTMLObjectElement) : void {
        obj.classList.remove('is-hide');
        obj.classList.add('is-show');
        obj.setAttribute('aria-expanded', 'true');
        obj.setAttribute('aria-hidden', 'false');
    }

    private _hide(obj : HTMLObjectElement) : void {
        obj.classList.remove('is-show');
        obj.classList.add('is-hide');
        obj.setAttribute('aria-expanded', 'false');
        obj.setAttribute('aria-hidden', 'true');
    }

    private _isHide(obj : HTMLObjectElement) : boolean {
        return obj.classList.contains('is-hide');
    }

    private _hasController(obj : HTMLObjectElement) : boolean {
        return ControllerHelper.allowController(obj, 'NavController');
    }

}