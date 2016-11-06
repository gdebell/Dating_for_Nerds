(function() {
  'use strict';

  angular
    .module('myApp.components.register', [])
    .controller('logInController', logInController);

  logInController.$inject = ['AuthService', '$state'];

  function logInController(AuthService, $state) {
    /*jshint validthis: true */
    this.logIn = function (loginInfo) {
      AuthService.checkAuth(loginInfo)
      .then((data) => {
        $state.go('members');
      });
    };

    //register a new user function
    this.onClick = function (registerInfo) {
      AuthService.register(registerInfo)
      .then((newUser) => {
        localStorage.setItem('token', newUser.data.data.token);
        $state.go('members');
      });
      this.newUser = {};
    };
  }

})();
