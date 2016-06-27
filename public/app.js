'user strict';

var app = angular.module('app',['ngRoute', 'ngResource']);
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', { controller: 'RegisterController', templateUrl: 'index.html' })
  .otherwise({redirectTo: "/RegisterController"})
})

