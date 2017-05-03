/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class ModalClose implements Object, Factory {

    public create() : HTMLObjectElement {
        const close = document.createElement("i");
        close.classList.add("icon-cancel", "o-modal__close");
        return close;
    }

}