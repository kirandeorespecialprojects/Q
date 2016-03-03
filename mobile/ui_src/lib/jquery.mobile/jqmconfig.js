$(document).bind("mobileinit", function() {
	console.log("### Config loaded...");
	 $.mobile.ajaxEnabled = false;
	 //$.mobile.linkBindingEnabled = false; //problem for custom slectmenu
	 $.mobile.hashListeningEnabled = false;
	 
	 //$.mobile.pushStateEnabled = false; //problem for custom slectmenu
	
	 $.mobile.buttonMarkup.hoverDelay = 100;
	
	 $.mobile.autoInitializePage = false;
});