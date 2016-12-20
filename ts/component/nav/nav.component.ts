/// <reference path="../../base/controller.helper.ts"/>
/// <reference path="../../helpers/object.helper.ts"/>
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
        ObjectHelper.show(obj);
    }

    private _hide(obj : HTMLObjectElement) : void {
        ObjectHelper.hide(obj);
    }

    private _isHide(obj : HTMLObjectElement) : boolean {
        return obj.classList.contains('is-hide');
    }

    private _hasController(obj : HTMLObjectElement) : boolean {
        return ControllerHelper.allowController(obj, 'NavController');
    }

}