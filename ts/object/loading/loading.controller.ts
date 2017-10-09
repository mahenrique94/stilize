/// <reference path="./loading.object.ts"/>

class LoadingController {

    private _loading : Loading = new Loading();

    public insertInBody() : void {
        document.body.appendChild(this._loading.new());
    }

    public removeLoading() : void {
        const loading = document.querySelector(".js-o-loading");
        if (loading)
            loading.remove();
    }

}