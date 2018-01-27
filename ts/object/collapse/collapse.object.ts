/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>
/// <reference path="../../helpers/object.helper.ts"/>

class Collapse implements Object {

    public toggle(collapse : HTMLObjectElement, event : Event) : void {
        const content = this._findContent(collapse);
        if (content) {
            ObjectHelper.toggle(content);
        }
    }

    private _findContent(collapse : HTMLObjectElement) : HTMLObjectElement {
        return collapse.parentNode.parentNode.querySelector(`[data-content="${collapse.dataset.collapse}"]`);
    }

}