'use strict';

/* Controllers */

leanVocabApp.controller('WordListCtrl', ['$scope', '$http', function($scope, $http) {
  var url = (window.leanVocabMeta.EVNI === 'dev') ? 'http://localhost:2404/words' : '/words';
  $http.get(url).success(function(data) {
    $scope.words = data;
  });

}]);
