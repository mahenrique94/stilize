var ModalController = (function () {
    function ModalController() {
        this._modal = new Modal(document.querySelector('[class*=modal]'));
    }
    ModalController.toggle = function () {
        this._modal.toggle();
    };
    return ModalController;
}());
