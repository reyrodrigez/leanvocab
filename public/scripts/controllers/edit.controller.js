(function () {
	'use strict';

	angular
		.module('controllers')
		.controller('EditController', EditController);

	EditController.$inject = ['dataservice', '$routeParams'];

	function EditController(dataservice, $routeParams) {

		var vm = this;

		vm.word = {};
		vm.submitForm = submitForm;

		init();

		function init() {
			if ($routeParams.id) {
				dataservice.getWordById($routeParams.id)
					.then(function (response) {
						vm.word = response.data;
					});
			}
		}

		function updateWord (id, data) {
			dataservice.updateWord(id, data).then(function() {

			});
		}

		function addWord (data) {
			dataservice.addWord(data).then(function() {
				vm.word = {};
			});
		}

		function submitForm () {
			var data;

			if (!!vm.word.hun && !!vm.word.eng) {
				data = {hun: vm.word.hun, eng: vm.word.eng};
				if (!!vm.word.id) {
					updateWord(vm.word.id, data);
				} else {
					addWord(data);
				}
			} else {
				alert('Please set both origin and target');
			}
		}

	}
})();
