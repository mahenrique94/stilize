/// <reference path="./tab.component.ts"/>

class TabController {

    private _tab : Tab = new Tab();

    public toggle(tab : HTMLObjectElement, event : Event) {
        event.preventDefault();
        this._tab.toggle(tab);
    }

}