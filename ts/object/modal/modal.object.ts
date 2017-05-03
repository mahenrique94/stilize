/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>
/// <reference path="./modalbackground.object.ts"/>
/// <reference path="./modalframe.object.ts"/>

class Modal implements Object, Factory {

    private _modalBackground : ModalBackground = new ModalBackground();

    public hide() : void {
        this._destroy();
        this._removeBackground();
    }

    public show(target : HTMLObjectElement) : void {
        document.body.appendChild(this.create(target.dataset.modalType, (target.href || target.formAction)));
        this._insertBackground();
    }

    public create(type : string, url : string) : HTMLObjectElement {
        const modal : HTMLObjectElement = document.createElement("dialog");
        modal.classList.add("js-o-modal", "is-show", `o-modal--${type || "large"}`);
        modal.setAttribute("role", "dialog");
        modal.appendChild(new ModalFrame(url).create());
        return modal;
    }

    private _destroy() : void {
        const modal : HTMLObjectElement = document.querySelector(".js-o-modal");
        modal.remove();
    }

    private _insertBackground() : void {
        document.body.appendChild(new ModalBackground().create());
    }

    private _removeBackground() : void {
        this._modalBackground.remove();
    }

}