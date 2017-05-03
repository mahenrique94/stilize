/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="../../interface/object.ts"/>

class Options implements Object {

    public toggle(options : HTMLObjectElement) : void {
        const ul : HTMLObjectElement = options.querySelector("ul");
        if (ObjectHelper.isHide(ul))
            ObjectHelper.show(ul);
        else
            ObjectHelper.hide(ul);
    }

}