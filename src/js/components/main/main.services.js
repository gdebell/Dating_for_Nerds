(function() {
  'use strict';

  angular
    .module('myApp.services.main', [])
    .service('MemberService', MemberService);

  MemberService.$inject = ['$http'];

  function MemberService ($http) {

    this.getMembers = function (getInfo) {
      let gDatesApi = 'https://galvanize-student-apis.herokuapp.com/gdating/members?limit=20&offset=50';
      return $http.get(gDatesApi)
      .then((results) => {
        //console.log('LOG 2', results.data.data);
        return results.data.data;
      });
    };

    this.photosArray = [
      {
        image: 'https://unsplash.com/collections/228643/romance?photo=K89617N_IvQ'
      },
      {
        image: 'https://unsplash.com/collections/228643/romance?photo=1otDfVSZnlk'
      },
      {
        image: 'https://images.unsplash.com/photo-1444839368740-f0d3572f8067?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=d86a2a5489d523ab5b15439252795847'
      },
      {
        image: 'https://unsplash.com/search/dating?photo=ihOBrSEdtx8'
      },
      {
        image: 'https://unsplash.com/search/dating?photo=9rHgOVRdrDM'
      }
    ]


  }
}());
