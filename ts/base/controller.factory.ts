/// <reference path="../component/media/media.controller.ts"/>
/// <reference path="../component/nav/nav.controller.ts"/>
/// <reference path="../component/tab/tab.controller.ts"/>
/// <reference path="../object/modal/modal.controller.ts"/>
/// <reference path="../object/options/options.controller.ts"/>
/// <reference path="../object/steps/steps.controller.ts"/>

    
(w => {

    window['MediaController'] = new MediaController();
    window['ModalController'] = new ModalController();
    window['NavController'] = new NavController();
    window['OptionsController'] = new OptionsController();
    window['StepsController'] = new StepsController();
    window['TabController'] = new TabController();

})(window);