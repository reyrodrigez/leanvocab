define([
    "marionette"
], function(
	Marionette
){

    "use strict";

    var App = new Marionette.Application();

    App.addRegions({
		appRegion: '.app-container',
		loginRegion: '.login-container'

    });

    return App;
});