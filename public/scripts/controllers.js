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

leanVocabCtrls.controller('TestCtrl', ['$scope', '$http', '$timeout',
  function($scope, $http, $timeout) {
    var words,
        answers = [];

    $scope.hover = false;


    $http({
      url: '//leanvocab.herokuapp.com/words',
      method: 'GET'
    }).success(function( data) {
        words = data;
        $scope.word = _.shuffle(words)[0];
        if ($scope.word.answers)
          answers = $scope.word.answers;
    });

    function resetWord() {
      answers = [];
      $scope.hover = !$scope.hover;
      $timeout(function () {
        $scope.word = _.shuffle(words)[0];
        if ($scope.word.answers)
          answers = $scope.word.answers;
      }, 290);
    }

    $scope.flip = function () {
      $scope.hover = !$scope.hover;
    };

    $scope.correctAnswer = function ($event) {
      answers.push(true);

      $event.stopPropagation();
      $http({
        url: '//leanvocab.herokuapp.com/words/' + $scope.word.id,
        method: 'PUT',
        data: {answers: answers}
      }).success(function( data) {
          resetWord();
      });
      
    };
    $scope.wrongAnswer = function ($event) {
      answers.push(false);
      $event.stopPropagation();
      $http({
        url: '//leanvocab.herokuapp.com/words/' + $scope.word.id,
        method: 'PUT',
        data: {answers: answers}
      }).success(function( data) {
          resetWord();
      });
    };
  }
]);

leanVocabCtrls.controller('AddCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $scope.submit = function () {
      if (!!$scope.word.hun && !!$scope.word.eng) {
        $http({
          url: '//leanvocab.herokuapp.com/words',
          method: 'POST',
          data: {hun: $scope.word.hun, eng: $scope.word.eng }
        }).success(function( data) {
          $scope.word = null;
        });

      } else {
        alert('Please set both origin and target');
      }
      
    };
  }
]);
