/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class ModalFrame implements Object, Factory {

    private _url : string;

    constructor(url : string) {
        this._url = url;
    }

    public create() : void {
        let iframe = document.createElement('IFRAME');
        iframe.classList.add('o-modal__content');
        iframe.src = this._url;
        return iframe;
    }

}