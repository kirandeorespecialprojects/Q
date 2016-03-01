define(function(require) {
	require('jquery.ui');
	require('jquery.mobile');
    require('Waves');
    require('wow');
	require('nativedroid2');

	var additem = function(){
		this.view;
	};

	additem.prototype = {
		attached : function(view, parent){
	         this.view = view;
	         
	         $(view).page();
	        
	         // $(this.view).find('#currency').selectmenu({
          //       create: function( event, ui ) {
          //           console.log('yay');
          //       }
          //    });

	         //$(view).show();
	         $(this.view).addClass('ui-page-active');
             
             $.nd2({
            
          	 });
     	},
     	compositionComplete: function(){

     		
             
       //       console.log($(this.view).find('#currency').length);
     	},
     	deactivate : function(){
	            //alert('tud tud dun dun tud dun dun');
	        $(this.view).removeClass('ui-page-active');
	    }
	};

	return additem;
});
