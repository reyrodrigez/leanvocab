define([
  'backbone',
  'app/controllers/loginController',
  'app/views/postView'
              
  ], function(Backbone, LoginController, PostView){

    "use strict";

    var Routes = Backbone.Router.extend({

      routes: {
        // 'post/:id': 'renderPostView',
        // 'user/:id': 'renderUserView',
        '*path': 'defaultRoute' // default view
      },

      defaultRoute: function () {
        LoginController.start();
      }

    });
    return Routes;

});
