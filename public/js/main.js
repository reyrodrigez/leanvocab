require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "vendors/jquery.min",
        "underscore": "vendors/underscore",
        "backbone": "vendors/backbone",
        "marionette": "vendors/backbone.marionette.min",
        "app": "app/App",

         //controllers
        "login.controller": "app/controllers/login.controller",
        "facebook.controller": "app/controllers/facebook.controller",

        //views
        "app.view": "app/views/app.view",
        "question.view": "app/views/question.view",
        "answer.view": "app/views/answer.view",
        "login.view": "app/views/login.view",


        "facebookSDK": "http://connect.facebook.net/en_US/all"

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
    'app',
    'app.view'
], function(App, AppLayout) {

    App.start();

    App.addInitializer(function () {
        App.appRegion.show(new AppLayout());
    });
    

});