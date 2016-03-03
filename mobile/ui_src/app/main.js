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
		'jquery.mobile': '../lib/jquery.mobile/jquery.mobile-1.4.5',
        'jqm-conf' : '../lib/jquery.mobile/jqmconfig',
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
       'jqm-conf' : {
            deps : ['jquery'],
            exports: 'jqmConfig'
        },
       'jquery.mobile': {
             deps: ['jqm-conf', 'css!../lib/jquery.mobile/jquery.mobile.min.css', 'css!../css/font-awesome.min.css']
       }
    }
});

define('main', function (require) {

        var system = require('durandal/system'),
         app = require('durandal/app'),
         viewLocator = require('durandal/viewLocator'),
         $ = require('jquery'),
         ko = require('knockout'),
         validation = require('knockout.validation'),
         promise = require('promise'),
         router = require('plugins/router'),
         binder = require('durandal/binder');
         
         jqueryui = require('jquery.ui');
         jqmobile = require('jquery.mobile'),
         
         
         window.$ = $;
         window.jqueryui = jqueryui;
         window.jqmobile = jqmobile;
         // window.waves = waves;
         // window.wow = wow;
         // window.nativedroid2 = nativedroid2;
         
         ko.validation = validation;
         window.ko = ko;
         window.promise = promise;
         
         // Load jQuery Mobile.
         require(['jquery.mobile'], function(jqm) {
            console.log("jQuery Mobile loaded...");
         });

         window.promise.polyfill();
         window.ko.validation.init({
            insertMessages: false,
            errorsAsTitle: false,
            messagesOnModified: true
         });

        window.settings = ko.observable({ cacheViews: true });
        window.setCacheViews = function(val){
            window.settings({ cacheViews: val });
        };

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

        binder.bindingComplete = function (data, view, instruction) {
            //console.log("---------- bindingComplete --------");
            //if (data.__moduleId__ !== "viewmodels/shell")
            //    $(view).trigger('create');
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