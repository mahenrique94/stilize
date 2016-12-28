/// <reference path="./options.object.ts"/>

class OptionsController {

    private _options : Options = new Options();

    public toggle(options : HTMLObjectElement, event : Event) : void {
        event.preventDefault();
        this._options.toggle(options);
    }

}