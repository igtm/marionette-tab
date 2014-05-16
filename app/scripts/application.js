define([
	'backbone',
	'communicator',
    'collections/Lists',
    'routers/MyRouter',
    'controllers/RouterController',
    'regions/ContainerRegion',
    'views/item/NaviItemView'
],

function( Backbone, Communicator, Lists, MyRouter, RouterController, ContainerRegion, NaviItemView ) {
    'use strict';

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({
        container : new ContainerRegion(),
        navi : '#navi'
    });

	/* Add initializers here */
	App.addInitializer( function () {
        console.log('App.initializer');
        App.navi.show(new NaviItemView());

        var RC = new RouterController();
        new MyRouter({controller: RC});
        Backbone.history.start();
	});

	return App;
});
