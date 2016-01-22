define(function(require) {
	require('kc');
    var router = require('plugins/router');
	
    return {
    	navigateTo: function(route){
    		router.navigate(route);
    	},
		attached : function(view, parent, settings){
			var self = this;

			var links = [
					{
					  "bgcolor":"#03A9F4",
					  "icon":"+"
					},
					{
					  url: "#profile",
					  bgcolor: "#DB4A39",
					  color: "#fffff",
					  icon: "<i class='fa fa-google-plus'></i>",
					  //"target":"_blank",
					  text: 'Go to profile',
					  fclick: self.navigateTo(this.url)
					},
					{
					  url: "#search",
					  bgcolor: "red",
					  color: "#fffff",
					  icon: "<i class='fa fa-youtube'></i>",
					  //"target":"_blank",
					  text: 'Go to search',
					  fclick: self.navigateTo(this.url)
					},
					{
					  url: "http://www.facebook.com",
					  bgcolor: "#3B5998",
					  color: "#fffff",
					  icon: "<i class='fa fa-facebook'></i>",
					  //"target":"_blank",
					  text: 'facebook',
					  fclick: self.navigateTo(this.url)
					}
				];

			$('.kc_fab_wrapper').kc_fab(links);
		}
	};
});