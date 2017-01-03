/// <reference path="./toast.object.ts"/>

class ToastController {

    private _toast : Toast = new Toast();

    public close(toast) : void {
        this._toast.close(toast);
    }

}