define(function(require) {
	var page = require('viewmodels/page');
	
	var myitems = function(){
		page.call(this, { pagename: 'myitems' });
	};

	var _super = page.prototype;
    myitems.prototype = Object.create(_super);

	return myitems;
});
