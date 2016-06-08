/// <reference path="../model/Modal.ts"/>

class ModalController {

    private _modal : Modal = new Modal(document.querySelectorAll('[class*=modal]'));

    public show(url? : string) : void {
        if (url)
            this._modal.show(url);
        else
            this._modal.close();
    }

}