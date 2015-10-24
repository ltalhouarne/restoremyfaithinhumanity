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
        templateUrl: 'index.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'page.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
