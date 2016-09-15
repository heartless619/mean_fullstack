'use strict';
class LintuFooterCtrl {

    /* @ngInject */
    constructor() {

    }
}

function FooterDirective() {
    return {
        restrict: 'E',
        replace: true,
        template: require('./footer.html'),
        controller: LintuFooterCtrl,
        controllerAs: 'vm',
        link: ($scope) => $scope.versionNumber = `${BUILD.B_MAJOR}.${BUILD.B_NUMBER} (${BUILD.B_BRANCH})`,
    };
}

export default (ngModule) => {
    ngModule.directive('lintuFooter', FooterDirective);
};
