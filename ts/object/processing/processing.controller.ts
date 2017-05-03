/// <reference path="./processing.object.ts"/>

class ProcessingController {

    private _processing = new Processing();

    public process() : void {
        document.body.appendChild(this._processing.new());
    }

    public stop() : void {
        this._processing.destroy();
    }

}