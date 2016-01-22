requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal',
        'plugins' : '../lib/durandal/plugins',
        'transitions' : '../lib/durandal/transitions',
        'knockout': '../lib/knockout/dist/knockout.debug',
        'knockout.validation': '../lib/knockout.validation/knockout.validation',
        //'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery.min',
		'jquery.mobile': '../lib/jquery.mobile/jquery.mobile-1.4.5.min',
        'kc': '../lib/kc.fab/kc.fab',
        //'jqueryMigrate': '../lib/jquery/jquery-migrate-1.2.1.min',
        //'jqueryui': '../lib/jquery-ui/jquery-ui-1.10.3.custom.min',
        //'bootstrapHoverDropdown': '../lib/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min',
        //'slimscroll': '../lib/jquery-slimscroll/jquery.slimscroll.min',
        //'blockui': '../lib/blockUI/jquery.blockui.min',
        //'cropper': '../lib/jcropper/cropper.min',
        //'uniform': '../lib/uniform/jquery.uniform.min',
        //'storage': '../app/classes/storageManager',
        'promise': '../lib/pollyfills/es6-promise/es6-promise.min',
        //'services' : '../app/classes/services',
        
        //'lodash' : '../lib/lodash/lodash',
        //'datepicker' : '../lib/bootstrap-datepicker/js/bootstrap-datepicker',
        //'mixitup' : '../lib/jquery-mixitup/jquery.mixitup.min',
        //'toBlob' : '../lib/pollyfills/toBlob/canvas-to-blob.min',
        //'ckeditor' : '../lib/ckeditor/ckeditor', //http://cdn.ckeditor.com/4.5.2/standard-all/ckeditor
        //'googlecalendar': '../lib/fullCalendar/gcal',
        //'moment': '../lib/moment/moment.min',
        //'fullcalendar': '/lib/fullCalendar/fullcalendar.min',
        //'mapapi' : 'http://maps.google.com/maps/api/js?sensor=true',
        //'gmapsjs' : '../lib/gmaps/gmaps',

        //async : '../lib/requirejs-plugins/src/async',   
        //font: '../lib/requirejs-plugins/src/font',  
        //goog: '../lib/requirejs-plugins/src/goog',  
        //image: '../lib/requirejs-plugins/src/image',  
        //json: '../lib/requirejs-plugins/src/json',  
        //noext: '../lib/requirejs-plugins/src/noext',  
        //mdown: '../lib/requirejs-plugins/src/mdown',  
        //propertyParser : '../lib/requirejs-plugins/src/propertyParser',  
        //markdownConverter : '../lib/requirejs-plugins/src/mdown',  

        /**
          Jade compiler and custom view engine next two lines
        **/
        //'jade': ['../lib/jade-0.35.0', '../lib/jade'],
        //'durandal/viewEngine': '../lib/durandal/js/jadeViewEngine',
        //'appScript': 'app'
    },
    shim: {
        'kc': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

//use plugins as if they were at baseUrl
// define([
//         'image!awsum.jpg',
//         'json!data/foo.json',
//         'noext!js/bar.php',
//         'mdown!data/lorem_ipsum.md',
//         'async!http://maps.google.com/maps/api/js?sensor=false',
//         'goog!visualization,1,packages:[corechart,geochart]',
//         'goog!search,1',
//         'font!google,families:[Tangerine,Cantarell]'
//     ], function(awsum, foo, bar, loremIpsum){
//         //all dependencies are loaded (including gmaps and other google apis)
//     }
// );

define('main', ['durandal/system', 'durandal/app', 'durandal/viewLocator', 'knockout', 'knockout.validation','jquery', 'jquery.mobile', 'promise', 'plugins/router', 'durandal/binder'],  function (system, app, viewLocator, ko, kovalidation, $, $mobile, p, router, binder) {
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
	window.$mobile = $mobile;
    window.promise = p;
	
	//binder.bindingComplete = function (data, view, instruction) {
        //console.log("---------- bindingComplete --------");
        //if (data.__moduleId__ !== "viewmodels/shell")
            //$(view).trigger('refresh');
		//$(view).enhanceWithin();
    //};
		
    return app.start()
    .then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});