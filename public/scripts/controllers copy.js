/* globals angular, window*/

'use strict';

/* Controllers */

var leanVocabCtrls = angular.module('leanVocabCtrls', []);

leanVocabCtrls.controller('WordListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.selectedIndex = -1;

    $http({
      url: '//leanvocab.herokuapp.com/words',
      method: 'GET'
    }).success(function( data) {
        $scope.words = data;
    });

    $scope.swapWord = function (word, index) {
      $http({
        url: '//leanvocab.herokuapp.com/words/' + word.id,
        data: {
          hun: word.eng,
          eng: word.hun
        },
        method: 'POST'
      }).success(function(data) {
        $scope.words[index] = data;
      });
    };

    $scope.deleteWord = function (word, index) {
      if (!window.confirm('Are you sure you\'d like to delete this item?')) {
        return true;
      }
      $http({
        url: '//leanvocab.herokuapp.com/words/' + word.id,
        method: 'DELETE'
      }).success(function() {
        $scope.words.splice(index, 1);
      });
    };

    $scope.itemClicked = function ($index, toolsOn) {
      if ($index === $scope.selectedIndex) {
          $scope.selectedIndex = -1;
      } else {
        $scope.selectedIndex = $index;
      }
    };
  }
]);

leanVocabCtrls.controller('EditWordCtrl', ['$scope', '$routeParams', '$http', 'dataservice',
  function($scope, $routeParams, $http, dataservice) {
    var wordId = $routeParams.wordId;

    dataservice.getWordById(wordId)
      .then(function(response) {
        $scope.word = response.data;
      });

    $scope.save = function () {
      var data = angular.copy($scope.word);
      $http({
        url: '//leanvocab.herokuapp.com/words/',
        method: 'POST',
        data: data
      }).success(function() {
          console.log('saved');
      });
    };
  }
]);

