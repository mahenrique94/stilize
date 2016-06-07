class ModalController {

    private _modal : any = new Modal(document.querySelector('[class*=modal]'));

    public static toggle() : void {
        this._modal.toggle();
    }

}