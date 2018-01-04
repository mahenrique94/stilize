/// <reference path="../../helpers/object.helper.ts"/>
/// <reference path="./dialog.object.ts"/>

class DialogController {

    private _dialog : Dialog = new Dialog();
    private _invoker : HTMLObjectElement;
    private _callback : Function;
    private _parameters;

    public build(event : Event, invoker : HTMLObjectElement, callback : Function, message : string = "Deseja confirmar a operacao", icon : string = "icon-attention", ...parameters) : void {
        event.preventDefault();

        if (ObjectHelper.isNull(icon))
            icon = "icon-attention";

        this._invoker = invoker;
        this._callback = callback;
        this._parameters = parameters;
        this._dialog.build(message, icon);
    }

    public close() : void {
        new DialogBackground().close();
        this._dialog.close();
    }

    public execute() : void {
	    console.log(this._parameters);
        this._callback(this._invoker, ...this._parameters);
        this.close();
    }

}