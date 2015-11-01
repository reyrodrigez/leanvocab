(function () {
	'use strict';

	angular
		.module('controllers')
		.controller('WordListController', WordListController);

	WordListController.$inject = ['dataservice'];

	function WordListController(dataservice) {

		var vm = this;

		vm.words = [];
		vm.swapWord = swapWord;
		vm.deleteWord = deleteWord;
		vm.itemClicked = itemClicked;

		init();

		function init () {
			dataservice.getWords().then(function(response) {
				vm.words = response.data;
			});
		}

		function swapWord () {}

		function deleteWord () {}

		function itemClicked () {}

	}
})();
