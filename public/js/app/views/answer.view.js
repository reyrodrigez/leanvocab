define([
    'marionette',
    'jquery',
    'app'
    ], function(
        Marionette,
        $,
        App
){

    'use strict';

    var AnswerView = Marionette.ItemView.extend({

        template: '#answer-template',

        ui: {
            'answerBtn' : '.js_answer-btn'
        },

        events: {
            'click @ui.answerBtn' : 'onAnswerBtnClicked',
            'click': 'onAnswered'
        },

        onAnswered: function () {
            App.vent.trigger('answered');
        },

        onAnswerBtnClicked: function (e) {
            e.stopPropagation();
            var answerQuality = $(e.currentTarget).data('quality');
            alert(answerQuality);

        }

    });

    return AnswerView;
});