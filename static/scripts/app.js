var nodeapp = angular.module('testapp', ['ngRoute','testctrl','testservice','Credentails']);

nodeapp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      // when('/two', {
      //   templateUrl: '../templates/two.html',
      //   controller: 'twocntrl'
      // }).
      // when('/pdf', {
      //   templateUrl: '../templates/pdf.html',
      //   controller: 'pdfCtrl'
      // }).
      // when('/pdflist', {
      //   templateUrl: '../templates/pdflist.html',
      //   controller: 'pdfListCtrl'
      // }).
      when('/index', {
        templateUrl: '../templates/home.html',
        controller: 'homecontroller'

      })
      // .
      // when('/three', {
      //   templateUrl: '../templates/three.html',
      //   controller: 'twocntrl'
      // }).
      // when('/addevent', {
      //   templateUrl: '../templates/addevent.html',
      //   controller: 'eventController'
      // }).
      // when('/login', {
      //   templateUrl: '../templates/login.html',
      //   controller: 'LoginController'
      // }).
      // when('/events', {
      //   templateUrl: '../templates/events.html',
      //   controller: 'ListController'
      // }).
      // when('/chat', {
      //   templateUrl: '../templates/chat.html',
      //   controller: 'ChatController'
      // }).
      //  when('/test', {
      //   templateUrl: '../templates/test.html',
      //   controller: 'TestController'
      // }).
      //        when('/test', {
      //   templateUrl: '../templates/test.html',
      //   controller: 'TestController'
      // })

      .otherwise({
        redirectTo: '/index'
      });
    $locationProvider.html5Mode(true);
  }]);
