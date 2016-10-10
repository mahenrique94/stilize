/// <reference path="../component/modal/Modal.ts"/>

class ModalController {

    private _modal : Modal = new Modal(document.querySelectorAll('[class*=modal]'));

    public show(obj? : any, event? : any) : void {
        event.preventDefault();
        if (obj)
            this._modal.show(obj.href || obj.formAction);
        else
            this._modal.close();
    }

}