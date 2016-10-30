(function() {
  'use strict';

  angular
    .module('myApp.service.auth', [])
    .service('AuthService', AuthService);

  AuthService.$inject = ['$http'];

  function AuthService($http) {
    console.log('You are in auth serv!');

    this.checkAuth = function (user) {
      //console.log(user);
      return $http({
        method: 'POST',
        url: 'https://galvanize-student-apis.herokuapp.com/gdating/auth/login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };

    this.register = function (newUser) {
      return $http({
        method: 'POST',
        url:'https://galvanize-student-apis.herokuapp.com/gdating/auth/register',
        data: newUser,
        header: {'Content-Type': 'application/json'}
      });
    };
  }

})();
