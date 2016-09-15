/**
 * Created by yangrui on 14.9.2016.
 */
module.exports = function() {

    require('bootstrap/dist/css/bootstrap.min.css');
    require('bootstrap/dist/css/bootstrap-theme.min.css');
    require('toastr/build/toastr.css');
    require('../public/css/site.css');
    require('../public/css/sticky-footer.css');

    global.$ = global.jQuery = require('jquery');
    require('angular');
    require('angular-resource/angular-resource.js');
    require('angular-route/angular-route.js');
    require('angular-ui-router/release/angular-ui-router.min.js');
    require('bootstrap/dist/js/bootstrap.min.js');
};