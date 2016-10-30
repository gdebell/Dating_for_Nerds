(function() {
  'use strict';

  angular
    .module('myApp.components.register', [])
    .controller('logInController', logInController);

  logInController.$inject = ['AuthService'];

  function logInController(AuthService) {
    /*jshint validthis: true */
    console.log('you are in the log in controller!');

    this.onSubmit = function (loginInfo) {
      AuthService.checkAuth(loginInfo)
      .then((user) => {
        console.log('made it past .then!!');
        console.log(user);
        localStorage.setItem('token', user.data.data.token);
      });
      this.user = {};
    };

    this.onClick = function (registerInfo) {
      console.log('you clicked the register button');
      console.log(registerInfo);

    };
  }

})();

// {
//   "username": "drumpf",
//   "avatar": "http://az616578.vo.msecnd.net/files/2016/04/24/6359712857427363911155185075_MakeAmericaGreatAgain.jpg",
//   "email": "drumpf@gmail.com",
//   "password": "password",
//   "dob": "1901-10-29",
//   "address": {
//   "geo": {
//     "lng": 0,
//     "lat": 0
//   }
//   },
//   "slug": "drumpf1",
// }
