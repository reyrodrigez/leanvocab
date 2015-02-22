define([
    "jquery",
    "facebook.controller"
], function(
	$,
	FacebookController
){

	"use strict";

	var LoginController = {
		_start: function () {
			FacebookController.initialize();
		},

		API: {
			start: function () {
				LoginController._start();
			}
		}
	};

    return LoginController.API;
});