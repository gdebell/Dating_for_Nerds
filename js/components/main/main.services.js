(function() {
  'use strict';

  angular
    .module('myApp.services.main', [])
    .service('MemberService', MemberService)
    .service('PersonService', PersonService);

  MemberService.$inject = ['$http', '$q'];

  function MemberService ($http, $q) {
    this.members = [];
    this.getMembers = (getInfo) => {
      if (this.members.length) return $q.resolve(this.members);

      let gDatesApi =   'https://galvanize-student-apis.herokuapp.com/gdating/members?limit=600&offset=149';
      return $http.get(gDatesApi)
      .then((results) => {
        this.members = results.data.data;
        return results.data.data;
      });
    };
  }

  function PersonService () {
    this.selectedMember = {selected: {} };
  }

}());
