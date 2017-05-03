/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="../../interface/component.ts"/>

class Nav implements Component {

    public toggle(obj : HTMLObjectElement) : void {
        const target : HTMLObjectElement = obj.parentNode.querySelector("ul") || obj.parentNode.querySelector("menu");
        if (ObjectHelper.isHide(target))
            ObjectHelper.show(target);
        else
            ObjectHelper.hide(target);
    }

}