/**
 * Created by yangrui on 14.9.2016.
 */
require('./vendor')();
const ngModule = angular.module('app', [

]);

require('./submodules')(ngModule);

angular.element(document)
    .ready(function() {
        angular.bootstrap(document, [ngModule.name], {});
});