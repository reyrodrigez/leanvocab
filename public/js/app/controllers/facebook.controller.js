define(['facebookSDK'], function(FB){

	var FacebookController = {
		initialize: function () {
			FB.init({
			appId: '445602285587952',
			cookie     : true,
	    	xfbml      : true,
	    	version    : 'v2.1',
	    	status     : true
			}, function () {
				FB.api('/me', function(rsp){
					console.log(rsp);
				});
			});
		}
	};

	return FacebookController;
	
	
	
	// FB.getLoginStatus(function(response) {
	// 	console.log(response);
	// });
});