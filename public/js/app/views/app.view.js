define([
    'jquery',
    'backbone',
    'marionette',
    'app',
    'login.controller',
    'login.view',
    'question.view',
    'answer.view'

    ], function(
        _,
        Backbone,
        Marionette,
        App,
        LoginController,
        LoginView,
        QuestionView,
        AnswerView
){

    'use strict';

    var WordCollection = Backbone.Collection.extend({
        url: '/words'
    });

    var AppLayout = Marionette.LayoutView.extend({

        _isFirst: true,

        _isloggedin: false,

        newModel: null,

        className: 'flip-container',

        template: '#app-template',

        regions: {
            cardFront: ".js_card-front",
            cardBack: ".js_card-back",
            loginBox: ".js_login"
        },

        events: {
            // click: 'onToggleHover'
        },

        collectionEvents: {
            'sync': 'onCollectionSync'
        },

        initialize: function () {
            var that = this;

            App.vent.listenTo(App.vent, 'asked', this.loadNewCardBack.bind(this));
            App.vent.listenTo(App.vent, 'answered', this.loadNewCardFront.bind(this));
        },

        // Render login view or fetch the words collection
        onRender: function () {
            if (!this._isloggedin) {
                LoginController.start();
                // this.renderLogin();
            } else {

                this.collection = new WordCollection();
                this.collection.fetch();
            }
        },

        onCollectionSync: function () {
            this.model = this.getRandomModel();

            this.renderFront(new QuestionView({model: this.model}));
            this.renderBack(new AnswerView({model: this.model}));
        },

        renderFront: function (view) {
            this.cardFront.show(view);
        },

        renderBack: function (view) {
            this.cardBack.show(view);
        },

        renderLogin: function () {
            var loginView = new LoginView();
            this.loginBox.show(loginView);
        },

        onToggleHover: function () {
            this.$el.toggleClass('hover');
        },

        loadNewCardFront: function () {
            this.newModel = this.getRandomModel();
            this.renderFront(new QuestionView({model: this.newModel}));
        },

        loadNewCardBack: function () {
            var model = (this.newModel) ? this.newModel : this.model;
            this.renderBack(new AnswerView({model: model}));
        },

        getRandomModel: function () {
            return this.collection.at(Math.floor(Math.random()*this.collection.length));
        }

    });

    return AppLayout;
});