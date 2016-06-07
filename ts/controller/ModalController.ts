/// <reference path="../model/Modal.ts"/>

class ModalController {

    private _modal : Modal = new Modal(document.querySelectorAll('[class*=modal]'));

    public toggle() : void {
        this._modal.toggle();
    }

}