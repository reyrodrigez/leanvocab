/* globals angular */

'use strict';

var leanVocabApp = angular.module('leanVocabApp', [
  'ngRoute',
  'leanVocabCtrls'
]);

leanVocabApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/words', {
        templateUrl: 'views/partials/words-list.html',
        controller: 'WordListCtrl'
      })
      .when('/edit/:wordId', {
        templateUrl: 'views/partials/edit-word.html',
        controller: 'EditWordCtrl'
      })
      .when('/test', {
        templateUrl: 'views/partials/test.html',
        controller: 'TestCtrl'
      })
      .when('/add', {
        templateUrl: 'views/partials/add.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/words'
      });
  }]);
