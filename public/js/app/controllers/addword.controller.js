define([
    'jquery',
    'app',
    'facebook.controller',
    'addword.view'
], function(
	$,
	App,
	FacebookController,
	AddWordView
){

	"use strict";

	var AddWordController = {
		_start: function () {

			FacebookController.checkLogin().done(function () {
				var view = new AddWordView();

					App.addWordRegion.show(view);

					App.addWordRegion.$el.addClass('active');

					App.loginRegion.$el.addClass('loggedin');
					App.loginRegion.reset();
			})
			.fail(function () {
				App.router.navigate('', {trigger: true});
			});
		},

		API: {
			start: function () {
				AddWordController._start();
			}
		}
	};

    return AddWordController.API;
});