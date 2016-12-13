/// <reference path="./modal.object.ts"/>

class ModalController {

    private _modal : Modal = new Modal();

    public hide(id : string) : ModalController {        
        this._modal.hide(id);
        return this;
    }

    public show(id : string) : ModalController {
        this._idModal = id;        
        this._modal.show(id);
        return this;
    }

}