define([
	'jquery',
	'facebookSDK'
], function(
	$
){

	var FacebookController = {
		initFBApp: function () {
			FB.init({
				appId: '445602285587952',
				cookie: true,
				xfbml: true,
				version: 'v2.1',
				status: true
			});
		},

		checkLogin: function () {
			var defer = $.Deferred();
			FB.getLoginStatus(function(rsp) {
				if (rsp.status === 'connected') {
					defer.resolve(rsp.authResponse);
				} else {
					defer.reject(rsp.status);
				}
				
			});
			
			return defer.promise();
		}
	};

	return FacebookController;
});