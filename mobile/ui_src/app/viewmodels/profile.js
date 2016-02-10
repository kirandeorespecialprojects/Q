define(function(require) {
	//require('kc');
    var router = require('plugins/router');
    require('nativedroid2');
	
    var profile = function(){
        this.view;
    };

    profile.prototype.activate = function(first_argument) {
        $.nd2({});
        var k = new $.nd2Search({
          placeholder : "Search",   // Placeholder in the search field
          defaultIcon : "globe-alt",  // optional: icon | null
          source : [
              {"label": "Afghanistan", "value": "AF"},
              {"label": "Åland Islands", "value": "AX"},
              {"label": "Albania", "value": "AL"},
              {"label": "Algeria", "value": "DZ"}
          ],   // autocomplete : option-source
          fn : function(result) { // this function will be executed when a valid result item is selected
            console.log('--- Your custom handling ---');
            console.log('you picked: ');
            console.log(result);
          }
        });
    };

    profile.prototype.attached = function(view, parent){
         this.view = view;
         
         $(view).page();
         //$(view).show();
         $(this.view).addClass('ui-page-active');
         $(this.view).find("#popupMenu2").popup();

         

        
         //$(view).page()
           // $(view).addClass('ui-page-active');
            //$.mobile.initializePage();
    };

    profile.prototype.panelToggle = function() {
        $(this.view).find("#leftpanel").panel("toggle");
    };

    profile.prototype.bottompanelToggle = function() {
        $(this.view).find("#bottomsheet").panel("toggle");
    };

    profile.prototype.openPopup = function() {
        $(this.view).find("#popupMenu2").popup("open", {positionTo: '#optionButton'});
    };

    profile.prototype.compositionComplete = function(view, parent){
        // $(view).on('pageinit', function() {
                
        // });

        //$.mobile.initializePage();
        //$(view).trigger('create');
        //$(view).enhanceWithin();
        

        
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
        $(this.view).removeClass('ui-page-active');
    };


    return profile;
});