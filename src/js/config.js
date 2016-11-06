(function() {

  'use strict';

  angular
    .module('myApp.config', ['ui.router'])
    .config(appConfig)
    .run(routeStart);

  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/components/main/main.view.html',
      controller: 'mainController',
      controllerAs: 'mainCtrl',
      restricted: false
    })
    .state('members', {
      url: '/members',
      templateUrl: 'js/components/members/members.view.html',
      controller: 'membersController',
      controllerAs: 'memCtrl',
      restricted: true
    })
    .state('members.member', {
      templateUrl: 'js/components/members/partials/_member.view.html',
      controller: 'membersController',
      controllerAs: 'memCtrl',
      restricted: true
    })
    .state('register', {
      url: '/register',
      templateUrl: 'js/components/register/register.view.html',
      controller: 'logInController',
      controllerAs: 'logCtrl',
      restricted: false
    })
    .state('login', {
      url: '/login',
      templateUrl: 'js/components/register/login.view.html',
      controller: 'logInController',
      controllerAs: 'logCtrl',
      restricted: false
    })
    .state('search', {
      url: '/search',
      templateUrl: 'js/components/members/search.view.html',
      controller: 'membersController',
      controllerAs: 'memCtrl',
      restricted: true
    });
  }

  function routeStart($rootScope, $state, AuthService, $location) {
    $rootScope.$on('$stateChangeStart', function (event, toState, fromState) {
      if (toState.restricted) {
        if (!localStorage.getItem('token')) {
          event.preventDefault();
          $state.go('login');
        }
      }
    });
  }

})();
