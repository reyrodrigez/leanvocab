// setting global meta
window.leanVocabMeta = {};

// get enviroment switch
window.leanVocabMeta.EVNI = (window.location.origin.indexOf('localhost') === -1) ? 'live' : 'dev';

var leanVocabApp = angular.module('leanVocabApp', []);
