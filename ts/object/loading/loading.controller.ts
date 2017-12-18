/// <reference path="./loading.object.ts"/>

class LoadingController {

    private _loading : Loading = new Loading();

    public insertInBody(message : String = "") : void {
        document.body.appendChild(this._loading.new(message));
    }

    public removeLoading() : void {
        const loading = document.querySelector(".js-o-loading");
        if (loading)
            loading.remove();
    }

}