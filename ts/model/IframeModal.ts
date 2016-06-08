/// <reference path="../interface/ElementStilize.ts"/>

class IframeModal implements ElementStilize {

    public create() : any {
        let iframeModal = document.createElement('iframe');
        iframeModal.classList.add('iframe-modal');
        iframeModal.id = 'iframe-modal';
        iframeModal.name = 'iframe-modal';
        return iframeModal;
    }

}