define([
    'marionette',
    'app'
    ], function(
        Marionette,
        App
){

    'use strict';

    var QuestionView = Marionette.ItemView.extend({

        template: '#question-template',

        tagName: 'h1',

        events: {
            'click': 'onAsked'
        },

        onAsked: function () {
			App.vent.trigger('asked');
		}

    });

    return QuestionView;
});