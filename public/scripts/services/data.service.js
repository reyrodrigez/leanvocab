/* globals window */

(function () {
	'use strict';

	angular
		.module('app')
		.factory('dataservice', dataservice);

	dataservice.$inject = ['$http'];

	function dataservice ($http) {
		return {
			getWordById: getWordById
		};

		function getWordById (id) {
			return $http.get(window.leanvocabMeta.baseUrl + 'words/' + id);
		}
	}
	
})();