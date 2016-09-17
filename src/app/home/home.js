'use strict';
class CompanyHomeCtrl {

    /* @ngInject */
    constructor() {
        console.log('company home constructor');
    }
}

const HomeComponent = {
    bindings: {},
    template: require('./home.html'),
    controller: CompanyHomeCtrl,
    controllerAs: 'vm'
};

export default (ngModule) => {
    ngModule.component('companyHome', HomeComponent);
};
