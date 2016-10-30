(function() {
  'use strict';

  angular
    .module('myApp.components.register', [])
    .controller('logInController', logInController);

  logInController.$inject = ['AuthService', '$state'];

  function logInController(AuthService, $state) {
    /*jshint validthis: true */
    console.log('you are in the log in controller!');

    //login function
    this.onSubmit = function (loginInfo) {
      AuthService.checkAuth(loginInfo)
      .then((user) => {
        console.log('made it past .then!!');
        console.log(user);
        console.log(user.data.data.user.names.firstName);
        localStorage.setItem('token', user.data.data.token);
        $state.go('members');
      });
      this.user = {};
    };

    this.onClick = function (registerInfo) {
      console.log('you clicked the register button');
      console.log(registerInfo);
      AuthService.register(registerInfo)
      .then((newUser) => {
        console.log('Submitted new user to API!!');
        localStorage.setItem('token', newUser.data.data.token);
        $state.go('members');
      });
      this.newUser = {};
    };
  }

})();
