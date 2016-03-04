//page events
//http://www.gajotres.net/document-onpageinit-vs-document-ready/
//createa dynamic pages
//http://stackoverflow.com/questions/6050384/dynamically-create-jquery-mobile-page-via-javascript-after-clicking

//have elements ids unique between pages
//each page should have id attribute

define(function(require) {
    // require('jquery.mobile');
    //require('jquery.ui')
    require('Waves');
    require('wow');
    require('nativedroid2');

    var router = require('plugins/router'),
        app = require('durandal/app');
        
    var shell = function(){
        this.init = function(){
            this.configureRoutes();
        };

        this.configureRoutes = function(){
            var routes = [
					{ route: '', title:'Home', moduleId: 'viewmodels/profile', nav: true },
                    { route: 'gallery', title:'Gallery', moduleId: 'viewmodels/gallery', nav: true },
					{ route: 'profile', title:'Profile', moduleId: 'viewmodels/home', nav: true },
                    { route: 'additem', title:'Add Item', moduleId: 'viewmodels/additem', nav: true },
                    { route: 'myitems', title:'My Item', moduleId: 'viewmodels/myitems', nav: true }
                ];

            router.map(routes).buildNavigationModel();
        };

        this.router = router;
        this.init();
    };

    shell.prototype = {
        //navbar: (new navbar({ router: router })).navbar,
        activate: function () {
            return router.activate({pushState : false});
        },
        compositionComplete: function(view, parent, settings){
			//$('[data-role="navbar"]').navbar();
			//$(view).enhanceWithin();
            
		},
        attached: function(view, parent, settings){
            //$("#dummypage").remove();//Class('ui-page-active');
        },
		goto: function(route){
			console.log(route);
			router.navigate(route);
		},
    }

    return new shell();
});