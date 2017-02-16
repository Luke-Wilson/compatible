angular.module('compatible', [
  'compatible.students',
  'compatible.services',
  'ui.router'
  ])
.config(function($stateProvider, $urlRouterProvider) {

  // $urlRouterProvider.otherwise('/home');
  // $urlRouterProvider


  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '<div>hello?</div>'
    })

    .state('students', {
      url: '/students',
      controller: 'StudentsController',
      templateUrl: '/app/students/students.html'
    });

});
