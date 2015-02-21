define([
    'marionette',
    'app'
    ], function(
        Marionette,
        App
){

    'use strict';

    var AnswerView = Marionette.ItemView.extend({

        template: '#answer-template',

        tagName: 'h1',

        events: {
            'click': 'onAnswered'
        },

        onAnswered: function () {
            App.vent.trigger('answered');
        }

    });

    return AnswerView;
});