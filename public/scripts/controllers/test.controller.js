(function () {
	'use strict';

	angular
		.module('controllers')
		.controller('TestController', TestController);

	TestController.$inject = ['$timeout', 'dataservice'];

	function TestController($timeout, dataservice) {

		var vm = this,
			words;

		vm.hover = false;
		vm.answers = [];
		vm.resetWord = resetWord;
		vm.flipCard = flipCard;
		vm.giveAnswer = giveAnswer;

		init();

		/** 
		 * Get words data from dataservice shuffle list and set the first object as viewmodel
		 */
		function init () {
			dataservice.getWords()
				.then(function(response) {
				words = response.data;
				vm.word = _.shuffle(words)[0];
				});
		}

		/** 
		 * Reset viewmodel values a flip back the card
		 */
		function resetWord () {
			$timeout(function () {
				vm.word = _.shuffle(words)[0];
				vm.answers = (vm.word.answers) ? vm.word.answers : [];
			}, 150);

			flipCard();
		}

		/** 
		 * Show front/back of the card
		 */
		function flipCard () {
			vm.hover = !vm.hover;
		}

		/** 
		 * Calling dataservice with the calculated answers array
		 * Stopping click event to propagate to a card container which would effect a flip
		 * @param {object} $event jqLite event from DOM 
		 * @param {Boolean} isRight
		 */
		function giveAnswer ($event, isRight) {
			var data = {answers: vm.answers};
			$event.stopPropagation();

			vm.answers.push(isRight);
			dataservice.updateWord(vm.word.id, data)
				.then(function () {
					resetWord();
				});
		}

	}
})();
