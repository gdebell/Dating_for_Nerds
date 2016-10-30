// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ui.materialize',
      'ui.router',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.members',
      'myApp.services.main',
      'myApp.components.register',
      'myApp.service.auth'
    ]);

})();
