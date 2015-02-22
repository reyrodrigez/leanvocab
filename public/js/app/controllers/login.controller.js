define([
    "jquery",
    "app",
    "login.view",
    "facebook.controller"
], function(
	$,
	App,
	LoginView,
	FacebookController
){

	"use strict";

	var LoginController = {
		_start: function () {
			FacebookController.checkLogin()
				.done(function () {
					App.router.navigate('', {trigger: true});
				})
				.fail(function () {
					var loginView = new LoginView();

					loginView.on('login:click', LoginController._onLogin);

					App.loginRegion.show(loginView);
					App.appRegion.reset();
				});

		},

		_onLogin: function (e) {
			FB.login(function (rsp) {
				App.router.navigate('', {trigger: true});
			});
		},

		API: {
			start: function () {
				LoginController._start();
			}
		}
	};

    return LoginController.API;
});