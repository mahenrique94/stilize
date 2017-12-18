/// <reference path="../../interface/object.ts"/>

class Loading implements Object {

    public new(message : String) : HTMLObjectElement {
        return this._create(message);
    }

    private _create(message : String) : HTMLObjectElement {
        const loading = document.createElement("div");
        loading.classList.add("o-loading", "js-o-loading");
        loading.appendChild(this._createIcon());
        loading.appendChild(this._createMessage(message));
        return loading;
    }

    private _createIcon() : HTMLObjectElement {
        const icon = document.createElement("i");
        icon.classList.add("o-loading__icon", "icon-spin1", "animate-spin");
        return icon;
    }

    private _createMessage(message : String) : HTMLObjectElement {
        const messageElement = document.createElement("span");
        messageElement.classList.add("o-loading__message");
        messageElement.textContent = message !== "" ? message : "Processamento em andamento, isso pode levar alguns minutos, aguarde por favor."
        return messageElement;
    }

}