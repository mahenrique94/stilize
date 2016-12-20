/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="../../interface/object.ts"/>

class Steps implements Object {

    public step(target : string, current : string) : void {
        ObjectHelper.show(this._findStep(target));
        ObjectHelper.hide(this._findStep(current));
    }

    private _findStep(s : string) : HTMLObjectElement {
        return document.getElementsByClassName(s)[0];
    }

}