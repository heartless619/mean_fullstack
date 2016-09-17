/**
 * Created by yangrui on 14.9.2016.
 */
module.exports = function() {

    require('angular-material/angular-material.min.css');
    require('angular-material-data-table/dist/md-data-table.min.css');
    require('angular-toastr/dist/angular-toastr.min.css');
    require('bootstrap/dist/css/bootstrap.min.css');
    require('bootstrap/dist/css/bootstrap-theme.min.css');
    require('toastr/build/toastr.css');
    require('../public/css/site.css');
    require('../public/css/sticky-footer.css');
    require('./styles/main.scss');

    global.$ = global.jQuery = require('jquery');
    require('angular');
    require('angular-material/angular-material.min.js');
    require('angular-material-data-table');
    require('angular-aria/angular-aria.min.js');
    require('angular-animate/angular-animate.min.js');
    require('angular-resource/angular-resource.js');
    require('angular-route/angular-route.js');
    require('angular-ui-router/release/angular-ui-router.min.js');
    require('angular-toastr/dist/angular-toastr.tpls.js');
    require('bootstrap/dist/js/bootstrap.min.js');

    require('babel-polyfill');
};