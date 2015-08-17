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
      .otherwise({
        redirectTo: '/words'
      });
  }]);
