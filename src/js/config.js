(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig);

  function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl'
    })
    .when('/members', {
      templateUrl: 'js/components/members/members.view.html',
      controller: 'membersController',
      controllerAs: 'memCtrl'
    })
    .otherwise('/');
  }

})();
