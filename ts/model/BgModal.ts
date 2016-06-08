/// <reference path="../interface/ElementStilize.ts"/>

class BgModal implements ElementStilize {

    public create() : any {
        let bgModal = document.createElement('div');
        bgModal.classList.add('bg-modal');
        bgModal.setAttribute('onclick', 'new ModalController().show(this.href);');
        return bgModal;
    }

}