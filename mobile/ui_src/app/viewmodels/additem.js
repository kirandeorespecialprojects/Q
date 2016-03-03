define(function(require) {
	var router = require('plugins/router');
	var additem = function(){
		this.view;
	};

	additem.prototype = {
		activate: function(){
			 $.nd2({});
			 console.info('additem activate');
		},
		attached : function(view, parent){
	         this.view = view;
	      	 console.info('additem attached');   
	      	 $(this.view).addClass('ui-page-active');
     	},
     	compositionComplete: function(view, parent){
     		$(view).page();//.trigger("create");
     		$.mobile.initializePage();  
     		//$('.page-host').pagecontainer('change', '#pages_additem'); 
       		console.info('additem compositionComplete');  
     	},
     	deactivate : function(){
	            //alert('tud tud dun dun tud dun dun');
	        $(this.view).removeClass('ui-page-active');
	        console.info('additem deactivate');
	    },
	    navto : function(route){        
        	router.navigate(route);
    	}
	};

	return additem;
});
