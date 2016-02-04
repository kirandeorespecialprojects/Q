define(function(require) {
	//require('kc');
    var router = require('plugins/router');
	
    var gallery = function(){

    };

    gallery.prototype.activate = function(first_argument) {
        
    };

    gallery.prototype.attached = function(view, parent){
         //this.view = view;
           // $(view).addClass('ui-page-active');
            //$.mobile.initializePage();
    };

    gallery.prototype.compositionComplete = function(view, parent){
        // $(view).on('pageinit', function() {
                
            // });

            //$.mobile.initializePage();
            //$(view).trigger('create');
            //$(view).enhanceWithin();
            $(view).page();
            $(view).show();
            //$.mobile.changePage('mgallery');
    };

    gallery.prototype.navto = function(){        
            router.navigate('');
    };

    gallery.prototype.detached = function(view, parent){
            $(view).page('destroy');
    };

    gallery.prototype.deactivate = function(){
            //alert('tud tud dun dun tud dun dun');
            //$(this.view).removeClass('ui-page-active');
    };


    return gallery;
});