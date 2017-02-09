/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="../../interface/object.ts"/>

class Steps implements Object {

    public step(target : string, current : string) : void {
        let nextStep = this._findStep(target);
        ObjectHelper.show(nextStep);
        ObjectHelper.hide(this._findStep(current));
        this._setFocusFirstElementWithoutValue(nextStep);
    }

    private _findStep(s : string) : HTMLObjectElement {
        return document.getElementsByClassName(s)[0];
    }

    private _setFocusFirstElementWithoutValue(step) : void {
        let inputs = step.querySelectorAll('input, select, textarea');
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === '') {
                inputs[i].dispatchEvent(new Event('keyup'));
                inputs[i].focus();
                return false;
            }
        }
    }

}