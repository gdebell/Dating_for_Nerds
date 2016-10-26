(function() {

  'use strict';

  angular
    .module('myApp.components.main', ['ui.bootstrap'])
    .controller('mainController', mainController);

  mainController.$inject = ['MemberService'];

  function mainController(MemberService) {
    /*jshint validthis: true */
    console.log('in main controller LOG: 1');
    MemberService.getMembers()
    .then((resultFromApi) => {
      console.log('LOG 3 results from service', resultFromApi);
      this.allMembers = resultFromApi;
      this.oneMember = resultFromApi[0];
    });

    this.mainPagePhotos = MemberService.photosArray;

  }

})();
