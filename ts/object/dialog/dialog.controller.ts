/// <reference path="./dialog.object.ts"/>

class DialogController {

    private _dialog : Dialog = new Dialog();

    public build(event : Event, callback : Function, message : string = "Deseja confirmar a operação", icon : string = "icon-attention") : void {
        event.preventDefault();
        this._dialog.build(callback, message, icon);
    }

    public close() : void {
        new DialogBackground().close();
        this._dialog.close();
    }

    public execute(callback : Function) : void {
        callback();
        this.close();
    }

}