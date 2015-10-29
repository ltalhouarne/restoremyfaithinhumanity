'use strict';

/**
 * @ngdoc function
 * @name restoremyfaithinhumanityApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the restoremyfaithinhumanityApp
 */
angular.module('restoremyfaithinhumanityApp')
  .controller('MainCtrl', function ($scope, $http) {
        $http({
            method: 'GET',
            url: 'https://www.reddit.com/r/upliftingnews/hot.json?sort=hot'
        }).success(function (data) {
            $scope.posts = data.data.children;
        });
  });
