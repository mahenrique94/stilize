/// <reference path="../../interface/object.ts"/>

class Loading implements Object {

    public new() : HTMLObjectElement {
        return this._create();
    }

    private _create() : HTMLObjectElement {
        const loading = document.createElement("div");
        loading.classList.add("o-loading", "js-o-loading");
        loading.appendChild(this._createIcon());
        return loading;
    }

    private _createIcon() : HTMLObjectElement {
        const icon = document.createElement("i");
        icon.classList.add("icon-spin1", "animate-spin");
        return icon;
    }

}