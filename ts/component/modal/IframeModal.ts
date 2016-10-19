/// <reference path="../../interface/ElementStilize.ts"/>

class IframeModal implements ElementStilize {

    public create() : any {
        let iframeModal = document.createElement('iframe');
        iframeModal.classList.add('c-modal__iframe');
        iframeModal.id = 'c-modal__iframe';
        iframeModal.name = 'c-modal__iframe';
        return iframeModal;
    }

}