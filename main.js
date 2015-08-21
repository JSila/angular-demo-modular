/* application-wide stuff */

var angular = require('angular');
require('angular-ui-router');

var demoAppModule = angular.module('demoApp', ['ui.router'])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
    });

require('./home')(demoAppModule);
require('./games')(demoAppModule);
require('./shared')(demoAppModule);
