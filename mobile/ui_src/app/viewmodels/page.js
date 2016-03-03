
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
	};

	page.prototype = {
		activate: function(options){
			console.info('profile activate');
        	$.nd2({});
		},
		attached: function(view, parent){
			this.view = view;
        	console.info('profile attached');  
        	$(this.view).addClass('ui-page-active');
		},
		compositionComplete: function(view, parent){
			$(this.view).page();
        	$.mobile.initializePage();
        	console.info('profile compositionComplete');
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
	        console.info('profile deactivate');
	    }
		// getView : function(){
		// 	return 'views/page.html';
		// }
	}

	return page;
});