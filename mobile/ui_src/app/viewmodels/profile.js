define(function(require) {
	  var page = require('viewmodels/page');
	   
    var profile = function(){
        page.call(this, { pagename: 'profile' });
    };

    var _super = page.prototype;
    profile.prototype = Object.create(_super);

    profile.prototype.onactivate = function(options) {
        //_super.activate(options)
        
        return new Promise(function(resolve, reject){
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
            
            resolve();
        });
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

    return profile;
});