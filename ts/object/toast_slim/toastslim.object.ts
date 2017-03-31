/// <reference path="../../interface/object.ts"/>

class ToastSlim implements Object {

    public close(toast) : void {
        toast.remove();
    }

}