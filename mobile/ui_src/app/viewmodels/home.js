define(function(require) {
	//require('kc');
    var router = require('plugins/router'),
    	leftPanelHtml = require('text!views/panel.left.html');
	
    var home = function(){
        this.view;
    };

    home.prototype.activate = function(first_argument) {
    	//this.observableHTML('panel.left.html');
    };

    home.prototype.attached = function(view, parent) {
        this.view = view;
    	//this.observableHTML('panel.left.html');
    		//$.mobile.initializePage();
    		//$(view).page();
    		//this.view = view;
    		//$(view).addClass('ui-page-active');
    		//if($( "#leftpanel" ).length > 0){ //$('div[data-view="views/home"]')
            //    console.log("present", $( "#leftpanel" ).length);
                //$( "#leftpanel" ).panel("open");
                //$(view).page();
                //$( "#leftpanel" ).panel({
				//  create: function( event, ui ) { alert('chung');}
				//});
            //}
    };

    home.prototype.panelToggle = function() {
    	$(this.view).find("#leftpanel").panel("toggle");
    };

    home.prototype.bottompanelToggle = function() {
        $(this.view).find("#bottomsheet").panel("toggle");
    };

    home.prototype.compositionComplete = function(view, parent) {
    	// $(view).on('pageinit', function() {
    			
			// });
			$(view).page();
			$(view).show();
    		//$(view).trigger('create');
			//$(view).enhanceWithin();
			//$.mobile.changePage('mhome');
    };

    home.prototype.navto = function() {
    	router.navigate('gallery');
    };

    home.prototype.deactivate = function() {
    	//alert('tud tud dun dun tud dun dun');
    	//$(this.view).removeClass('ui-page-active');
    };

    return home;
});