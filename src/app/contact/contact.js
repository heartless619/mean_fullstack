'use strict';
class CompanyContactCtrl {

    /* @ngInject */
    constructor() {

    }
}

const ContactComponent = {

    bindings: {},
    template: require('./contact.html'),
    controller: CompanyContactCtrl,
    controllerAs: 'vm'
};


export default (ngModule) => {
    ngModule.component('companyContact', ContactComponent);
};
