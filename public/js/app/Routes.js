define([
  'backbone',
  'app/controllers/postController',
  'app/controllers/loginController',
  'app/views/postView'
              
  ], function(Backbone, PostController, LoginController, PostView){

    "use strict";

    var Routes = Backbone.Router.extend({

      routes: {
        'post/:id': 'renderPostView',
        'user/:id': 'renderUserView',
        '*path': 'defaultRoute' // default view
      },

      renderPostView: function(id) {
        PostController.postById(id);
      },

      defaultRoute: function () {
        LoginController.start();
      }

    });
    return Routes;

});
