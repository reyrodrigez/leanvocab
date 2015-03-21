define([
    'jquery',
    'app',
    'facebook.controller',
    'app.view'
], function(
	$,
	App,
	FacebookController,
	AppLayout
){

	"use strict";

	var AppController = {
		_start: function () {

			FacebookController.checkLogin()
				.done(function () {
					var view = new AppLayout();

					App.appRegion.show(view);
					
					App.appRegion.$el.addClass('active');

					App.loginRegion.$el.addClass('loggedin');
					App.loginRegion.reset();

					App.addWordRegion.reset();
				})
				.fail(function () {
					App.router.navigate('', {trigger: true});
				});
		},

		API: {
			start: function () {
				AppController._start();
			}
		}
	};

    return AppController.API;
});