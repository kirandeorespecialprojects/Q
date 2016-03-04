
/* requireJS inheritance
*http://blog.singuerinc.com/javascript/requirejs/2014/03/17/requirejs-and-javascript-inheritance/
*/

define(function (require) {
	var router = require('plugins/router');

	var page = function (options) {
		// $(document).on('pagecreate','#pages_profile',function(event){ //always fired
        //    console.log( 'This page was pagecreate by jQuery Mobile!');
        // });

        // $(document).on( 'pageinit', '#pages_profile', function( event ) { //always fired
        //   console.log( 'This page was just enhanced by jQuery Mobile!' );
        // });

        // $(document).on('pagebeforeshow','#pages_profile',function(event){
        //    console.log( 'This page was pagebeforeshow by jQuery Mobile!');
        // });

        // $(document).on('pageshow','#pages_profile',function(event){
        //    console.log( 'This page was pageshow by jQuery Mobile!');
        // });


        // $(document).on( 'pageload', '#pages_profile', function( event ) {
        //   console.log( 'This page was just loaded by jQuery Mobile!');
        // });
		this.view;
		this.options = options;
	};

	page.prototype = {
		onactivate: function(options){},
		onattached: function(view, parent){},
		oncompositionComplete: function(view, parent){},
		ondeactivate: function(){},

		activate: function(options){
			console.info(this.options.pagename + ' activate');
        	$.nd2({});

        	return this.onactivate(options);
		},
		attached: function(view, parent){
			console.info(this.options.pagename + ' attached');  
			this.view = view;
			this.onattached(view, parent);
			$(this.view).addClass('ui-page-active');
		},
		compositionComplete: function(view, parent){
			console.info(this.options.pagename + ' compositionComplete');
			$(this.view).page();
        	$.mobile.initializePage();
        	this.oncompositionComplete(view, parent);
        	//$(view).trigger('create');
        	//$(view).enhanceWithin();
        	//$('.page-host').pagecontainer('change', '#pages_profile');
		},
		navto: function(route){        
        	router.navigate(route);
    	},
    	deactivate: function(){
	        //alert('tud tud dun dun tud dun dun');
	        $(this.view).removeClass('ui-page-active');
	        this.ondeactivate();
	        console.info(this.options.pagename + ' deactivate');
	    }
	}

	return page;
});