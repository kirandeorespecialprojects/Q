define(function(require) {
    var router = require('plugins/router');
	
    return {
		attached : function(view, parent, settings){
			//$(view).trigger('refresh');
		},
		goto : function(){
			router.navigate('profile');
		}
	};
});