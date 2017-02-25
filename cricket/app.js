'use strict';
angular.module('cricketInfo')
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('start', {
        url: '/',
        templateUrl: 'app/views/start.html',
        controller: 'StartCtrl'
      })
      .state('play', {
        url: '/play/:countryname',
        templateUrl: 'app/views/score.html',
        controller: 'PlayCtrl',
        controllerAs:'vm'
      })
      .state('play-history', {
        url: '/play/:toball/:over/:ball',
        templateUrl: 'app/views/play-history.html',
        controller: 'PlayCtrl',
        controllerAs:'vm'
      });
    $locationProvider.hashPrefix('');
});