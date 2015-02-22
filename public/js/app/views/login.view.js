define([
    'jquery',
    'backbone',
    'marionette',
    'app'

    ], function(
        _,
        Backbone,
        Marionette,
        App
){

    'use strict';
    var LoginView = Marionette.ItemView.extend({

        className: 'fb-login',

        template: '#login-template'

    });

    return LoginView;
});