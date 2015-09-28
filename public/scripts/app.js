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
			// .when('/edit/:wordId', {
			// 	templateUrl: 'views/partials/edit-word.html',
			// 	controller: 'EditWordCtrl'
			// })
			.when('/test', {
				templateUrl: 'views/partials/test.html',
				controller: 'TestController',
				controllerAs: 'test'
			})
			.when('/add', {
				templateUrl: 'views/partials/add.html',
				controller: 'AddController',
				controllerAs: 'add'
			})
			.otherwise({
				redirectTo: '/test'
			});
	}
})();
