/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>
/// <reference path="./modalbackground.object.ts"/>
/// <reference path="./modalcontent.object.ts"/>

class Modal implements Object, Factory {

    private _modalBackground : ModalBackground = new ModalBackground();

    public append() : void {
        let modal = this.create();
        modal.appendChild(new ModalContent().create());
        document.body.appendChild(modal);
    }

    public hide(id : string) : void {
        let modal : HTMLObjectElement;
        this._removeBackground(id);
        if (this._isFrame())
           modal = parent.document.getElementById(id);
        else
            modal = document.getElementById(id);
        ObjectHelper.hide(modal);
    }

    public show(id : string) : void {
        this._insertBackground(id);
        let modal : HTMLObjectElement = document.getElementById(id);
        ObjectHelper.show(modal);
    }

    public create() : HTMLObjectElement {
        let modal = document.createElement('DIALOG');
        modal.classList.add('o-modal', 'o-modal--large', 'is-hide');
        modal.id = 'o-modal--1';
        modal.setAttribute('aria-hidden', 'true');
        modal.setAttribute('aria-expanded', 'false');
        modal.setAttribute('aria-labelledby', 'o-modal__title--1');
        modal.setAttribute('role', 'dialog');
        return modal;
    }

    private _insertBackground(id : string) : void {
        document.body.appendChild(new ModalBackground(id).create());
    }

    private _removeBackground(id : string) : void {
        this._modalBackground.remove(id);
    }

    private _isFrame() : boolean {
        return parent.document.location != self.location;
    }

}