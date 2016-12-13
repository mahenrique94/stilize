/// <reference path="../../interface/object.ts"/>

class ModalBackground implements Object {

    public create(id : string) : HTMLObjectElement {
        let modalBackground : HTMLObjectElement = document.createElement('DIV');
        modalBackground.classList.add('o-modal__background');
        modalBackground.setAttribute('data-modal', id);
        modalBackground.setAttribute('onclick', `ModalController.hide('${id}')`);
        return modalBackground;
    }

    public remove(id : string) : void {
        let modalBackground : HTMLObjectElement;
        if (this._isFrame())
            modalBackground = parent.document.querySelector(`[data-modal=${id}]`);
        else
            modalBackground = document.querySelector(`[data-modal=${id}]`);
        if (modalBackground != null && modalBackground != undefined)
            modalBackground.parentNode.removeChild(modalBackground);
    }

    private _isFrame() : boolean {
        return parent.document.location != self.location;
    }

}