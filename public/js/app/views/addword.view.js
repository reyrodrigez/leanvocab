define([
    'jquery',
    'marionette',
    'app'
    ], function(
        $,
        Marionette,
        App
){

    'use strict';

    var AnswerView = Marionette.ItemView.extend({

        tagName: 'article',

        className: 'addword',

        template: '#addword-template',

        ui: {
            'originInput': '.js_original-language',
            'targetInput': '.js_target-language',
            'addBtn': '.js_add-button',
            'successBtn': '.js_success-button',
            'wordInput': '.js_word-input',
            'submitBtn': '.js_submit'
        },

        events: {
            'keyup @ui.wordInput': 'toggleActive',
            'click @ui.submitBtn' : 'onSubmitForm'
        },

        /**
         * toggle `active` class on input element if it has content
         * @param  {object} e keyup event
         */
        toggleActive: function (e) {
            var $trg = $(e.currentTarget);
            $trg.toggleClass('active', ($trg.val() !== ''));
        },

        onSubmitForm: function (e) {
            var that = this;
            e.preventDefault();

            var originWord = $(this.ui.originInput).val().trim();
            var targetWord = $(this.ui.targetInput).val().trim();

            $.ajax('/words', {
                dataType: 'json',
                method: 'POST',
                data: {
                    hun: originWord,
                    eng: targetWord,
                    answersCount: {}
                }
            }).done(function (){
                $(that.ui.addBtn).removeClass('active');
                $(that.ui.successBtn).addClass('active');
                // that.model.collection.fetch();
                window.setTimeout(that.resetView, 3000);
            });
        },

        resetView: function () {
            $(that.ui.successBtn).removeClass('active');
            $(that.ui.addBtn).addClass('active');
            $(this.ui.originInput).val("");
            $(this.ui.targetInput).val("");
        }

    });

    return AnswerView;
});