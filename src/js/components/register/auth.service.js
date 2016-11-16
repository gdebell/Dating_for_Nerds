(function() {
  'use strict';

  angular
    .module('myApp.service.auth', [])
    .service('AuthService', AuthService);

  AuthService.$inject = ['$http'];

  function AuthService($http) {
    this.checkAuth = function (user) {
      return $http({
        method: 'POST',
        url: 'http://galvanize-student-apis.herokuapp.com/gdating/auth/login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      })
      .then((user) => {
        this.loggedIn = user.data.data.user;
        localStorage.setItem('token', user.data.data.token);
        return user.data.data.user;
      });
    };

    this.register = function (newUser) {
      return $http({
        method: 'POST',
        url:'http://galvanize-student-apis.herokuapp.com/gdating/auth/register',
        data: newUser,
        header: {'Content-Type': 'application/json'}
      });
    };
  }
})();
