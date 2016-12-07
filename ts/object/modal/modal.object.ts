/// <reference path="../../interface/object.ts"/>
/// <reference path="./modalbackground.object.ts"/>

class Modal implements Object {

    private _modalBackground : ModalBackground = new ModalBackground();

    public hide(id : string) : void {
        this._removeBackground(id);
        let modal : HTMLObjectElement = document.getElementById(id);
        modal.classList.add('is-hide');
        modal.classList.remove('is-show');
    }

    public show(id : string) : void {
        this._insertBackground(id);
        let modal : HTMLObjectElement = document.getElementById(id);
        modal.classList.add('is-show');
        modal.classList.remove('is-hide');
    }

    private _insertBackground(id : string) {
        let background = this._modalBackground.create(id);
        document.body.appendChild(background);
    }

    private _removeBackground(id : string) {
        this._modalBackground.remove(id);
    }

}