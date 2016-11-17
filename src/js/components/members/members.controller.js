(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController)
    .controller('memberController', memberController);

  membersController.$inject = ['MemberService', '$state'];
  memberController.$inject = ['PersonService', 'MemberService'];

  //bring in all members
  function membersController(MemberService, $state) {
    /*jshint validthis: true */
    MemberService.getMembers()
    .then((resultsFromApi) => {
      this.allMembers = resultsFromApi;
    });
    this.logOut = () => {
      $state.go('home');
      localStorage.clear();
    };
  }

  //bring in the selected member's info:
  function memberController(PersonService, MemberService) {
    /*jshint validthis: true */
    this.person = PersonService.selectedMember;

    this.showOne = (person) => {
        let selPersonLat = person.address.geo.lat;
        let selPersonLong = person.address.geo.lng;
        this.person.selected = person;

        //get the selected person's interest:
        var interested = [];
        var selection = ['Not Sure', 'Friendship', 'Dating', 'Life Long Relationship'];
        for (var i = 0; i < person.interestedIn.length; i++) {
          var interestNum = selection[person.interestedIn[0]];
          interested.push(interestNum);
          this.person.interestedIn = interested;
        }

        //check to see of the selected person is near galvanize:
        if (selPersonLat > -40 && selPersonLat < 120) {
          if (selPersonLong < -45 && selPersonLong > -185) {
            this.person.address = true;
          }
        } else {
          this.person.address = false;
        }
      };
  }

})();
