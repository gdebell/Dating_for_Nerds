(function() {
  'use strict';

  angular
    .module('myApp.services.main', [])
    .service('MemberService', MemberService);

    MemberService.$inject = ['$http'];

    function MemberService ($http) {

      this.getMembers = function (getInfo) {
        let gDatesApi= 'https://galvanize-student-apis.herokuapp.com/gdating/members?limit=20&offset=50';
        return $http.get(gDatesApi)
        .then((results) => {
          console.log('LOG 2', results.data.data);
          return results.data.data;
        })
      }
    }
}());
