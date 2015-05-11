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

        initialize: function () {
            var that = this;
            this.listenTo(this.model, 'count:saved', function () {
                that.$el.trigger('click');
            });
        },

        onAnswered: function () {
            App.vent.trigger('answered');
        },

        onAnswerBtnClicked: function (e) {
            var that = this,
                answerUpdate,
                answerCountObj,
                id = this.model.get('id'),
                answerQuality = $(e.currentTarget).data('quality');

            e.stopPropagation();

            if (!this.model.get('answersCount')) {
                switch (answerQuality) {
                    case 'right':
                        answerUpdate = '{"right":"1", "almost":"0", "false": "0"}';
                        break;
                    case 'almost':
                        answerUpdate = '{"right":"0", "almost":"1", "false": "0"}';
                        break;
                    case 'false':
                        answerUpdate = '{"right":"0", "almost":"0", "false": "1"}';
                        break;
                }
            } else {
                answerCountObj = JSON.parse(this.model.get('answersCount'));
                answerCountObj[answerQuality] = (parseInt(answerCountObj[answerQuality], 10) + 1).toString();

                answerUpdate = JSON.stringify(answerCountObj);

            }

            this.model.save({answersCount: answerUpdate});

        }

    });

    return AnswerView;
});