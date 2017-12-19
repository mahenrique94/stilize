/// <reference path="../../interface/object.ts"/>

class Processing implements Object {

    public destroy() : void {
        const processing = document.querySelector(".js-o-processing");
        if (processing)
            processing.remove();
    }

    public new(message : String) : HTMLObjectElement {
        return this._create(message);
    }

    private _create(message : String) : HTMLObjectElement {
        const processing = document.createElement("div");
        processing.classList.add("o-processing", "js-o-processing");
        processing.appendChild(this._createIcon());
        processing.appendChild(this._createMessage(message));
        return processing;
    }

    private _createIcon() : HTMLObjectElement {
        const icon = document.createElement("i");
        icon.classList.add("o-processing__icon", "icon-spin1", "animate-spin");
        return icon;
    }

    private _createMessage(message : String) : HTMLObjectElement {
        const messageElement = document.createElement("span");
        messageElement.classList.add("o-processing__message");
        messageElement.textContent = message !== "" ? message : "Processamento em andamento, isso pode levar alguns minutos, aguarde por favor."
        return messageElement;
    }

}