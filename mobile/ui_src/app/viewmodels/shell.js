define(function(require) {
    var router = require('plugins/router'),
        app = require('durandal/app');
        
    var shell = function(){
        this.init = function(){
            this.configureRoutes();
        };

        this.configureRoutes = function(){
            var routes = [
					{ route: '', title:'Home', moduleId: 'viewmodels/home', nav: true },
					{ route: 'search', title:'Search', moduleId: 'viewmodels/search', nav: true },
					{ route: 'profile', title:'Profile', moduleId: 'viewmodels/profile', nav: true }
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
			$(view).enhanceWithin();
		},
		goto: function(route){
			console.log(route);
			router.navigate(route);
		}
    }

    return new shell();
});