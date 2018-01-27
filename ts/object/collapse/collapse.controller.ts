/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="./collapse.object.ts"/>

class CollapseController {

    private _collapse : Collapse = new Collapse();

    public collapse(collapse : HTMLObjectElement, event : Event) : void {
        this._collapse.toggle(collapse, event);
    }

}