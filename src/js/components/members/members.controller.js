(function() {

  'use strict';

  angular
    .module('myApp.components.members', [])
    .controller('membersController', membersController)
    .controller('memberController', memberController);

  membersController.$inject = ['MemberService'];
  memberController.$inject = ['PersonService', 'MemberService'];

  //bring in all members
  function membersController(MemberService) {
    /*jshint validthis: true */
    MemberService.getMembers()
    .then((resultsFromApi) => {
      this.allMembers = resultsFromApi;
      //console.log(this.allMembers);
    });
  }

  //bring in the selected member's info:
  function memberController(PersonService, MemberService) {
    /*jshint validthis: true */
    this.person = PersonService.selectedMember;
    this.showOne = (person) => {
        //console.log(person);
        //console.log(person._id);
        let selPersonLat = person.address.geo.lat;
        let selPersonLong = person.address.geo.lng;
        this.person.selected = person;

        //get the selected person's interest:
        var interested = [];
        var selection = ['Not Sure', 'Friendship', 'Dating', 'Life Long Relationship'];
        for (var i = 0; i < person.interestedIn.length; i++) {
          if (person.interestedIn[i] === 0) {
            interested.push('Not Sure');
          }
          if (person.interestedIn[i] === 1) {
            interested.push('Friendship');
          }
          if (person.interestedIn[i] === 2) {
            interested.push('Dating');
          }
          if (person.interestedIn[i] === 3) {
            interested.push('Life Long Relationship');
          }
          this.person.interestedIn = interested;
        }

        //check to see of the selected person is near by:
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
