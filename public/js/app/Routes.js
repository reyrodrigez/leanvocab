define([
  'jquery',
  'backbone',
  'app.controller',
  'addword.controller',
  'login.controller',
  'facebook.controller',
  'vendors/jquery.cookie'
  ], function(
    $,
    Backbone,
    AppController,
    AddWordController,
    LoginController,
    FacebookController
  ){

    "use strict";

    var Routes = Backbone.Router.extend({

      routes: {
        ''      : 'routeJunction',
        'login' : 'loginRoute', // login
        'start' : 'defaultRoute', // default view
        'add'   : 'addWord'
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
      },

      addWord: function () {
        AddWordController.start();
      }

    });
    return Routes;

});
