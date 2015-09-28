(function () {
	'use strict';

	angular
		.module('controllers')
		.controller('AddController', AddController);

	AddController.$inject = ['dataservice'];

	function AddController(dataservice) {

		var vm = this;

		vm.word = {};
		vm.submitForm = submitForm;

		function submitForm () {
			if (!!vm.word.hun && !!vm.word.eng) {
				var data = {hun: vm.word.hun, eng: vm.word.eng};
				dataservice.addWord(data).then(function() {
					vm.word = {};
				});
			} else {
				alert('Please set both origin and target');
			}
		}

	}
})();
