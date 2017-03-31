/// <reference path="./toastslim.object.ts"/>

class ToastSlimController {

    private _toastSlim : ToastSlim = new ToastSlim();

    public close(toastSlim) : void {
        this._toastSlim.close(toastSlim);
    }

}