/// <reference path="../model/Modal.ts"/>
(function(classes) {

    class ModalController {

        private _modal : Modal = new Modal(document.querySelectorAll('[class*=modal]'));

        public show(obj? : any) : void {
            event.preventDefault();
            if (obj)
                this._modal.show(obj.href || obj.formAction);
            else
                this._modal.close();
        }

    }

    classes.ModalController = ModalController;

})(window.classes || (window.classes = {}));