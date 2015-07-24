'use strict';

/* Controllers */

leanVocabApp.controller('WordListCtrl', ['$scope', '$http', function($scope, $http) {
  var url = (window.leanVocabMeta.EVNI === 'dev') ? 'http://localhost:2403/words' : '/words';
  $http.get('http://localhost:2403/words').success(function(data) {
    $scope.words = data;
  });

}]);
