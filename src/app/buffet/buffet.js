'use strict';
class CompanyBuffetCtrl {

    /* @ngInject */
    constructor() {

    }
}

const BuffetComponent = {

    bindings: {},
    template: require('./buffet.html'),
    controller: CompanyBuffetCtrl,
    controllerAs: 'vm'
};


export default (ngModule) => {
    ngModule.component('companyBuffet', BuffetComponent);
};
