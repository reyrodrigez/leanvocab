/* globals window */

(function () {
	'use strict';

	angular
		.module('app')
		.factory('dataservice', dataservice);

	dataservice.$inject = ['$http'];

	function dataservice ($http) {
		return {
			addWord: addWord,
			getWordById: getWordById,
			getWords: getWords,
			updateWord: updateWord
		};

		function addWord (data) {
			return $http({
				url: window.leanvocabMeta.baseUrl + 'words',
				method: 'POST',
				data: data
			});
		}

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