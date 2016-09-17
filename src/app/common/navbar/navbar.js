class NavbarCtrl {
     constructor($scope, $rootScope, $state, TranslateService) {
        Object.assign(this, {
            $scope,
            $rootScope,
            $state,
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

    shouldBeActive(parentState) {
        if (this.$state.current.name) {
            console.log('current state', this.$state);
            return this.$state.current.name.includes(parentState);
        }
        return false;
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
        controllerAs: 'vm'
    };
}

export default (ngModule) => {
    ngModule.directive('comNavbar', NavbarDirective);
};
