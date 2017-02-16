angular.module('compatible.services', [])
.factory('Students', function($http) {
  return {
    getStudents: function() {
      return $http ({
        method: 'GET',
        url: '/api/students'
      }).then(students => {
        // console.log(students);
        return students.data;
      });
    }
    //http request functions to server go in here.
  };
});
