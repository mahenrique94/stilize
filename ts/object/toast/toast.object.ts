/// <reference path="../../interface/object.ts"/>

class Toast implements Object {

    public close(toast) : void {
        toast.remove();
    }

}