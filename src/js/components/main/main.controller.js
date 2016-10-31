(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['MemberService'];

  function mainController(MemberService) {
    /*jshint validthis: true */

    MemberService.getMembers()
    .then((resultFromApi) => {
      this.allMembers = resultFromApi;
      this.oneMember = resultFromApi[0];
    });

    this.mainPagePhotos = MemberService.photosArray;

  }

})();
