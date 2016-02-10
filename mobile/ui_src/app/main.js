requirejs.config({
    paths: {
        text: '../lib/require/text',
        css: '../lib/require/css.min',
        durandal:'../lib/durandal',
        plugins : '../lib/durandal/plugins',
        //transitions : '../lib/durandal/transitions',
        knockout: '../lib/knockout/dist/knockout.debug',
        'knockout.validation': '../lib/knockout.validation/knockout.validation',
        jquery: '../lib/jquery/jquery.min',
        'jquery.ui': '../lib/jquery.ui/jquery-ui.min',
		'jquery.mobile': '../lib/jquery.mobile/jquery.mobile-1.4.5.min',
        Waves: '../lib/waves/waves.min',
        wow: '../lib/wow/wow.min',
        kc: '../lib/kc.fab/kc.fab',
        nativedroid2 : '../lib/nativedroid2',
        promise: '../lib/pollyfills/es6-promise/es6-promise.min',
    },
    shim: {
       kc: {
            deps: ['jquery'],
            exports: 'jQuery'
       },
       Waves: {
            deps: ['css!../lib/waves/waves.min.css'],
            exports: 'Waves'
       },
       wow: {
            deps: ['css!../lib/wow/animate.css'],
            exports: 'wow'
       },
       nativedroid2: {
             deps: ['css!../css/nativedroid2.css']
       },
       'jquery.mobile': {
             deps: ['css!../lib/jquery.mobile/jquery.mobile.min.css', 'css!../css/font-awesome.min.css']
       }
    }
});

define('main', ['durandal/system', 'durandal/app', 'durandal/viewLocator', 'knockout', 'knockout.validation','jquery' /*,'jquery.mobile'*/, 'promise', 'plugins/router', 'durandal/binder', 'jquery.ui', 'Waves', 'wow' /*,'nativedroid2'*/],  function (system, app, viewLocator, ko, kovalidation, $ /*, $mobile*/, p, router, binder, jqueryui, waves, wow /*, nativedroid2*/) {

        $(document).bind("mobileinit", function() {
                console.log("### Config loaded...");
                $.mobile.ajaxEnabled = false;
                $.mobile.linkBindingEnabled = false;
                $.mobile.hashListeningEnabled = false;
                $.mobile.pushStateEnabled = false;
                
                $.mobile.buttonMarkup.hoverDelay = 100;
                
                $.mobile.autoInitializePage = false;
                //$.mobile.page.prototype.options.domCache = false;
            });

    //document.addEventListener('deviceready', function(){ setTimeout(onDeviceReady, 500);
    //function onDeviceReady(){
        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");
        app.title = 'title';

        app.configurePlugins({
            router:true,
            dialog: true,
            widget: true
        });

        p.polyfill();

        ko.validation = kovalidation;
        ko.validation.init({
            insertMessages: false,
            errorsAsTitle: false,
            messagesOnModified: true
        });

        window.ko = ko;
        window.$ = $;
    	//window.$mobile = $mobile;
        window.promise = p;
    	
    	binder.bindingComplete = function (data, view, instruction) {
            //console.log("---------- bindingComplete --------");
            //if (data.__moduleId__ !== "viewmodels/shell")
                //$(view).trigger('refresh');
    		//$(view).enhanceWithin();

            //console.warn($( "body" ).pagecontainer( "getActivePage" ));
        };

        return app.start()
        .then(function() {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            viewLocator.useConvention();

            //Show the app by setting the root view model for our application with a transition.
            app.setRoot('viewmodels/shell');
        });

    //}});;
});