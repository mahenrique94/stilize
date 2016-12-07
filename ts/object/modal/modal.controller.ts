/// <reference path="./modal.object.ts"/>

class ModalController {

    private _modal : Modal = new Modal();

    public hide(id : string) : void {        
        this._modal.hide(id);
    }

    public show(id : string) : void {        
        this._modal.show(id);
    }

}