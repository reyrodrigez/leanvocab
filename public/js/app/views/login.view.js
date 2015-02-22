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

        template: '#login-template',

        ui: {
            'fbLoginBtn': '.js_fb-login-btn'
        },

        events: {
            'click @ui.fbLoginBtn': 'onLogin'
        },

        onLogin: function () {
            this.trigger('login:click');
        }

    });

    return LoginView;
});