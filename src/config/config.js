export default (ngModule) => {
    // Add $state and $stateParams to $rootScope for easier access;

    ngModule.run(($rootScope, $state, $stateParams) => {

        $rootScope.progressMode = 'indeterminate';
        // Show error on $state change or redirect to login screen
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            $('.progress-bar').hide();
            switch (error) {
                default:
                    $state.go('home');
            }
        });

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                $('.progress-bar').show();
                if(toState.name === "home"){
                    event.preventDefault();
                    $('.progress-bar').hide();
                }
            });


        // add if login is needed
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, error) {


            $('.progress-bar').hide();
        });

    });
    
    ngModule.config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/home');
        $stateProvider 
            .state('home', {
                url: '/home',
                views: {
                    '': {
                        template: '<company-home></company-home>'
                    }
                }
            })
            .state('buffet', {
                url: '/buffet',
                views: {
                    '': {
                        template: '<company-buffet></company-buffet>'
                    }
                }
            })
            .state('menu', {
                url: '/menu',

                views: {
                    '': {
                        template: '<company-menu></company-menu>'
                    }
                }
            })
            .state('info', {
                url: '/info',
                views: {
                    '': {
                        template: '<company-info></company-info>'
                    }
                }
            })
            .state('contact', {
                url: '/contact',
                views: {
                    '': {
                        template: '<company-contact></company-contact>'
                    }
                }
            });
    })

};
