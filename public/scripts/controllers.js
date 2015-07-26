'use strict';

/* Controllers */

leanVocabApp.controller('WordListCtrl', ['$scope', '$http', function($scope, $http) {
  $http({
          url: "//leanvocab.herokuapp.com/words",
          method: "GET",
          data: [],
          params: {foo: $scope.foo}
        }).success(function(data, status) {
            $scope.words = data;
        });

}]);
