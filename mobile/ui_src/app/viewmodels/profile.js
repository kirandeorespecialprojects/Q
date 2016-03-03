define(function(require) {
	  var router = require('plugins/router');
	   
    var profile = function(){
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
        this.DOMloaded = false;
    };

    profile.prototype.activate = function(first_argument) {
        console.info('profile activate');
       
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
        console.info('profile attached');  
        $(this.view).addClass('ui-page-active');
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
        $(this.view).page();
        $.mobile.initializePage();
        console.info('profile compositionComplete');
        //$('.page-host').pagecontainer('change', '#pages_profile');
        //$.mobile.initializePage();
        //$(view).trigger('create');
        //$(view).enhanceWithin();

        this.DOMloaded = true;
        $.mobile.pageContainer.pagecontainer('change', '#pages_profile', {
              transition: 'flip',
              changeHash: false,
              reverse: true,
              showLoadMsg: true
          });
    };

    profile.prototype.navto = function(route){        
        router.navigate(route);
    };

    //profile.prototype.detached = function(view, parent){
        //$(view).page('destroy');
    //};

    profile.prototype.deactivate = function(){
            //alert('tud tud dun dun tud dun dun');
        $(this.view).removeClass('ui-page-active');
        console.info('profile deactivate');
    };


    return profile;
});