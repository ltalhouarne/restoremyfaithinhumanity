'use strict';

/**
 * @ngdoc overview
 * @name restoremyfaithinhumanityApp
 * @description
 * # restoremyfaithinhumanityApp
 *
 * Main module of the application.
 */
angular
    .module('restoremyfaithinhumanityApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
