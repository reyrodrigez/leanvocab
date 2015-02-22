define([
  'jquery',
  'backbone',
  'app.controller',
  'login.controller',
  'facebook.controller',
  'vendors/jquery.cookie'
  ], function(
    $,
    Backbone,
    AppController,
    LoginController,
    FacebookController
  ){

    "use strict";

    var Routes = Backbone.Router.extend({

      routes: {
        ''      : 'routeJunction',
        'login' : 'loginRoute', // login
        'start' : 'defaultRoute' // default view
      },

      routeJunction: function () {
        var that = this;
        FacebookController.checkLogin()
          .done(function () {
            that.navigate('start', {trigger: true});
          })
          .fail(function () {
            that.navigate('login', {trigger: true});
          });
            
      },

      loginRoute: function () {
        LoginController.start();
      },

      defaultRoute: function () {
        AppController.start();
      }

    });
    return Routes;

});
