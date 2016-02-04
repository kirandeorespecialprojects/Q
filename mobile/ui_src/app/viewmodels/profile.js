define(function(require) {
	//require('kc');
    var router = require('plugins/router');
    require('nativedroid2');
	
    var profile = function(){
        this.view;
    };

    profile.prototype.activate = function(first_argument) {
        
    };

    profile.prototype.attached = function(view, parent){
         this.view = view;
           // $(view).addClass('ui-page-active');
            //$.mobile.initializePage();
    };

    profile.prototype.panelToggle = function() {
        $(this.view).find("#leftpanel").panel("toggle");
    };

    profile.prototype.bottompanelToggle = function() {
        $(this.view).find("#bottomsheet").panel("toggle");
    };

    profile.prototype.compositionComplete = function(view, parent){
        // $(view).on('pageinit', function() {
                
            // });

            //$.mobile.initializePage();
            //$(view).trigger('create');
            //$(view).enhanceWithin();
            $(view).page();
            $(view).show();
            //$.mobile.changePage('mgallery');
    };

    profile.prototype.navto = function(){        
            router.navigate('');
    };

    profile.prototype.detached = function(view, parent){
            $(view).page('destroy');
    };

    profile.prototype.deactivate = function(){
            //alert('tud tud dun dun tud dun dun');
            //$(this.view).removeClass('ui-page-active');
    };


    return profile;
});