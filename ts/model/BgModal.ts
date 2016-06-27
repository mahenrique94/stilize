/// <reference path="../interface/ElementStilize.ts"/>

class BgModal implements ElementStilize {

    public create() : any {
        let bgModal = document.createElement('div');
        bgModal.classList.add('bg-modal');
        bgModal.setAttribute('data-controller', 'ModalController');
        bgModal.setAttribute('onclick', 'ModalController.show(null, event);');
        return bgModal;
    }

}