// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.bootstrap',
      'ngRoute',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.members',
      'myApp.services.main'
    ]);

})();
