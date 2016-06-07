class ModalController {

    private _modal : any = new Modal(document.querySelector('[class*=modal]'));

    static toggle() {
        this._modal.toggle();
    }

}