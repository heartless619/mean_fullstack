'use strict';
class CompanyInfoCtrl {

    /* @ngInject */
    constructor() {

    }
}

const InfoComponent = {
    bindings: {},
    template: require('./info.html'),
    controller: CompanyInfoCtrl,
    controllerAs: 'vm'
};

export default (ngModule) => {
    ngModule.component('companyInfo', InfoComponent);
};
