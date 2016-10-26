(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController);

  membersController.$inject = ['MemberService'];

  function membersController(MemberService) {
    /*jshint validthis: true */
    console.log('Members Controller!!');
    MemberService.getMembers()
    .then((resultsFromApi) => {
      this.allMembers = resultsFromApi;
          console.log(this.allMembers);
    });
  }

})();
