/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class ModalContent implements Object, Factory {

    public create() : HTMLObjectElement {
        let content = document.createElement('DIV');
        content.classList.add('o-modal__content');
        return content;
    }

}