define(function(require) {
	var page = require('viewmodels/page');
	
	var additem = function(){
		page.call(this, {});
	};

	var _super = page.prototype;
    additem.prototype = Object.create(_super);

	return additem;
});
