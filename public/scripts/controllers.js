/* globals angular, window, _ */

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

leanVocabCtrls.controller('EditWordCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    var wordId = $routeParams.wordId;

    $http({
      url: '//leanvocab.herokuapp.com/words/' + wordId,
      method: 'GET'
    }).success(function( data) {
        $scope.word = data;
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

leanVocabCtrls.controller('TestCtrl', ['$scope', '$http',
  function($scope, $http) {
    var words;

    $scope.hover = false;

    $http({
      url: '//leanvocab.herokuapp.com/words',
      method: 'GET'
    }).success(function( data) {
        words = data;
        resetWord();
    });

    function resetWord() {
      $scope.word = _.shuffle(words)[0];
    }

    $scope.flip = function () {
      $scope.hover = !$scope.hover;
    };

    $scope.answerRight = function () {
      console.log('right');
    };
    $scope.answerWrong = function () {
      console.log('wrong');
    };
    $scope.answerAlmost = function () {
      console.log('almost');
    };
  }
]);
