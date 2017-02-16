angular.module('compatible.students', [])
.controller('StudentsController', function($scope, Students) {
  $scope.test = "This is a test from the Students Controller";

  $scope.list = [1,1];

  $scope.getStudents = function() {
    Students.getStudents()
    .then(result => {
      console.log(result);
      $scope.list = result;
    });
  }
});
