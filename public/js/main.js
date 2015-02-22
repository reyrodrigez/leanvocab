require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        "jquery": "vendors/jquery.min",
        "underscore": "vendors/underscore",
        "backbone": "vendors/backbone",
        "marionette": "vendors/backbone.marionette.min",
        "app": "app/App",

         //app
        "app.controller": "app/controllers/app.controller",
        "app.view": "app/views/app.view",

        //views
        "question.view": "app/views/question.view",
        "answer.view": "app/views/answer.view",
        "login.view": "app/views/login.view"

    },
    shim: {
        "marionette": {
                        //loads dependencies first
            deps: ["jquery", "underscore"],
                        //custom export name, this would be lowercase otherwise
            exports: "Marionette"
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