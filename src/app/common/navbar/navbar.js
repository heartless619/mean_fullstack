class NavbarCtrl {
     constructor($scope, $rootScope, TranslateService) {
        Object.assign(this, {
            $scope,
            $rootScope,
            TranslateService
        });
         var vm = this;

         //Initialize
         var language = vm.$rootScope.appLanguage || 'Fi';
         vm.pageText = vm.TranslateService.returnTranslatedInformation(language);
         vm.$rootScope.$on('langChanged', vm.languageSelect);

         vm.languageSelect = function(lang) {
             console.log('language selected = ', lang);
             vm.pageText = vm.TranslateService.returnTranslatedInformation(lang);
             vm.$rootScope.appLanguage = lang;
             vm.$rootScope.$emit('langChanged', lang);
         }

    }
}

function NavbarDirective() {
    return {
        restrict: 'E',
        scope: {},
        bindToController: true,
        replace: true,
        template: require('./navbar.html'),
        controller: NavbarCtrl,
        controllerAs: 'vm',
        link: (scope, elem, attrs, ctrl) => {
        }
    };
}

export default (ngModule) => {
    ngModule.directive('comNavbar', NavbarDirective);
};
