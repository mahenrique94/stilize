/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class DialogClose implements Object, Factory {

    public create() : HTMLObjectElement {
        const close = document.createElement("ICON");
        close.classList.add("icon-cancel", "o-dialog__close");
        return close;
    }

}