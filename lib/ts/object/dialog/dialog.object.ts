/// <reference path="../../interface/object.ts"/>
/// <reference path="../../interface/factory.ts"/>

class Dialog implements Object, Factory {

    private _message : string;
    private _icon : string;

    public build(message : string, icon : string) : void {
        this._message = message;
        this._icon = icon;
        document.body.appendChild(this.create());
    }

    public create() : HTMLObjectElement {
        document.body.appendChild(new DialogBackground().create());
        const dialog = document.createElement("div");
        dialog.classList.add("o-dialog", "js-o-dialog");
        dialog.innerHTML = `
            <div class="o-dialog__body">
                <span class="o-dialog__icon"><i class="${this._icon}"></i></span>
                <p class="o-dialog__message">${this._message} ?</p>
            </div>
            <div class="o-dialog__footer">
                <button class="o-dialog__button o-button--der" onclick="DialogController.close();" type="button"><i class="icon-cancel"></i>&nbsp;Não</button>
                <button class="o-dialog__button o-button--ren" onclick="DialogController.execute();" type="button"><i class="icon-ok"></i>&nbsp;Sim</button>
            </div>
        `;
        return dialog;
    }

    public close() : void {
        const dialog : HTMLObjectElement = document.querySelector(".js-o-dialog");
        dialog.remove();
    }
    
}