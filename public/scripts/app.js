(function () {

	angular
		.module('app', ['ngRoute', 'leanVocabCtrls'])
		.config(config);

	function config ($routeProvider) {
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
				redirectTo: '/test'
			});
	}
})();
