(function () {

	window.leanvocabMeta = {
		baseUrl: '//leanvocab.herokuapp.com/'
	};

	angular
		.module('app', ['ngRoute', 'controllers'])
		.config(config);

	function config ($routeProvider) {
		$routeProvider
			// .when('/words', {
			// 	templateUrl: 'views/partials/words-list.html',
			// 	controller: 'WordListCtrl'
			// })
			.when('/test', {
				templateUrl: 'views/partials/test.html',
				controller: 'TestController',
				controllerAs: 'test'
			})
			.when('/word/:id?', {
				templateUrl: 'views/partials/edit.html',
				controller: 'EditController',
				controllerAs: 'edit'
			})
			.otherwise({
				redirectTo: '/test'
			});
	}
})();
