/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>
/// <reference path="./modalclose.object.ts"/>

class ModalBackground implements Object, Factory {

    public create() : HTMLObjectElement {
        let modalBackground : HTMLObjectElement = document.createElement("DIV");
        modalBackground.classList.add("o-modal__background", "js-o-modal__background");
        modalBackground.setAttribute("onclick", "ModalController.hide()");
        modalBackground.appendChild(new ModalClose().create());
        return modalBackground;
    }

    public remove(id : string) : void {
        let modalBackground : HTMLObjectElement = document.querySelector(".js-o-modal__background");
        modalBackground.parentNode.removeChild(modalBackground);
    }

}