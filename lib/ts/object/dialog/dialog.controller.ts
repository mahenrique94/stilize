/// <reference path="./dialog.object.ts"/>

class DialogController {

    private _dialog : Dialog = new Dialog();
    private _invoker : HTMLObjectElement;
    private _callback : Function;

    public build(event : Event, invoker : HTMLObjectElement, callback : Function, message : string = "Deseja confirmar a operacao", icon : string = "icon-attention") : void {
        event.preventDefault();
        this._invoker = invoker;
        this._callback = callback;
        this._dialog.build(message, icon);
    }

    public close() : void {
        new DialogBackground().close();
        this._dialog.close();
    }

    public execute() : void {
        this._callback(this._invoker);
        this.close();
    }

}