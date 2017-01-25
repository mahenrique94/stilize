/// <reference path="./media.component.ts"/>

class MediaController {

    private _media : Media = new Media();

    public play(media : HTMLObjectElement) : void {
        this._media.play(media);
    }

    public pause(media : HTMLObjectElement) : void {
        this._media.pause(media);
    }

    public first(media : HTMLObjectElement) : void {
        this._media.first(media);
    }

    public backwards(media : HTMLObjectElement) : void {
        this._media.backwards(media);
    }

    public forward(media : HTMLObjectElement) : void {
        this._media.forward(media);
    }

    public last(media : HTMLObjectElement) : void {
        this._media.last(media);
    }

}