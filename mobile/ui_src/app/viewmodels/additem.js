define(function(require) {
	require('nativedroid2');

	var additem = function(){
		this.view;
	};

	additem.prototype = {
		attached : function(view, parent){
	         this.view = view;
	         
	         $(view).page();
	         //$(view).show();
	         $(this.view).addClass('ui-page-active');
	         $.nd2({
            
          	 });
     	},
     	deactivate : function(){
	            //alert('tud tud dun dun tud dun dun');
	        $(this.view).removeClass('ui-page-active');
	    }
	};

	return additem;
});
