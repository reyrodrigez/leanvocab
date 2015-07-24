require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "vendors/jquery.min",
        "underscore": "vendors/underscore",
        "backbone": "vendors/backbone",
        "marionette": "vendors/backbone.marionette.min",
        "app": "app/App",

         //controllers
        "app.controller": "app/controllers/app.controller",
        "addword.controller": "app/controllers/addword.controller",
        "login.controller": "app/controllers/login.controller",
        "facebook.controller": "app/controllers/facebook.controller",

        //views
        "app.view": "app/views/app.view",
        "addword.view": "app/views/addword.view",
        "question.view": "app/views/question.view",
        "answer.view": "app/views/answer.view",
        "login.view": "app/views/login.view",


        "routes": "app/Routes",
        "facebookSDK": "//connect.facebook.net/en_US/all"

    },
    shim: {
        "marionette": {
                        //loads dependencies first
            deps: ["jquery", "underscore"],
                        //custom export name, this would be lowercase otherwise
            exports: "Marionette"
        },
        "facebookSDK" : {
            exports: "FB"
        }
    }
});
require([
    'backbone',
    'routes',
    'app',
    'app.view',
    'facebook.controller'
], function(Backbone, Routes, App, AppLayout, FacebookController) {

    App.start();

    App.addInitializer(function () {
        FacebookController.initFBApp();
        App.router = new Routes();
        Backbone.history.start();
    });
    

});