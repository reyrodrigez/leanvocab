/* globals window */

(function () {
	'use strict';

	angular
		.module('app')
		.factory('dataservice', dataservice);

	dataservice.$inject = ['$http'];

	function dataservice ($http) {
		return {
			getWordById: getWordById,
			getWords: getWords,
			updateWord: updateWord
		};

		function getWords () {
			return $http.get(window.leanvocabMeta.baseUrl + 'words');
		}

		function getWordById (id) {
			return $http.get(window.leanvocabMeta.baseUrl + 'words/' + id);
		}

		function updateWord (id, data) {
			return $http({
				url: window.leanvocabMeta.baseUrl + 'words/' + id,
				method: 'PUT',
				data: data
			});
		}
	}
	
})();