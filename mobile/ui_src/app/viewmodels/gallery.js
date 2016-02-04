define(function(require) {
	//require('kc');
    var router = require('plugins/router');
    require('nativedroid2');
	
    var gallery = function(){
        this.view;
    };

    gallery.prototype.activate = function(first_argument) {
        
    };

    gallery.prototype.attached = function(view, parent){
         this.view = view;
           // $(view).addClass('ui-page-active');
            //$.mobile.initializePage();
    };

    gallery.prototype.panelToggle = function() {
        $(this.view).find("#leftpanel").panel("toggle");
    };

    gallery.prototype.bottompanelToggle = function() {
        $(this.view).find("#bottomsheet").panel("toggle");
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

    gallery.prototype.navto = function(route){        
            router.navigate(route);
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