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
            'submit': '.js_submit'
        },

        events: {
            'submit' : 'onSubmitForm'
        },

        onSubmitForm: function (e) {
            e.preventDefault();

            var originWord = $(this.ui.originInput).val().trim();
            var targetWord = $(this.ui.targetInput).val().trim();

            console.log(originWord + '/' + targetWord);

            $.ajax('/words', {
                dataType: 'json',
                method: 'POST',
                data: {
                    hun: originWord,
                    eng: targetWord
                }
            }).done(function (){
                alert('saved');
            });
        }

    });

    return AnswerView;
});