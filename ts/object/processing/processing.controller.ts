/// <reference path="./processing.object.ts"/>

class ProcessingController {

    private _processing : Processing = new Processing();

    public start(message : String = "") : void {
        document.body.appendChild(this._processing.new(message));
    }

    public stop() : void {
        this._processing.destroy();
    }

}