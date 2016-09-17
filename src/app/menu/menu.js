'use strict';
class CompanyMenuCtrl {

    /* @ngInject */
    constructor() {

    }
}

const MenuComponent = {

    bindings: {},
    template: require('./menu.html'),
    controller: CompanyMenuCtrl,
    controllerAs: 'vm'
};


export default (ngModule) => {
    ngModule.component('companyMenu', MenuComponent);
};
