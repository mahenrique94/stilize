/// <reference path="./modal.object.ts"/>

class ModalController {

    private _modal : Modal = new Modal();

    public hide() : void {        
        this._modal.hide();
    }

    public show(target : HTMLObjectElement, event : Event) : void {
        event.preventDefault();    
        this._modal.show(target);
    }

}