define([
	'backbone',
	'communicator',
    'collections/Lists',
    'routers/MyRouter',
    'controllers/RouterController'
],

function( Backbone, Communicator, Lists, MyRouter, RouterController ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        container : '#container',
        navi : '#navi'
    });

	/* Add initializers here */
	App.addInitializer( function () {
        console.log('App.initializer');
        App.lists = new Lists();
        window.App = App;

        var RC = new RouterController();
        new MyRouter({controller: RC});
        Backbone.history.start();
	});

	return App;
});
