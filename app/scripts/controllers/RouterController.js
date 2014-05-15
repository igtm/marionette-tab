define([
	'backbone',
    'views/layout/FirstTab',
    'Views/item/NaviItemView'
],
function( Backbone, FirstTab, NaviItemView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

        //初期画面
		initialize: function( options ) {
			console.log("initialize a Routercontroller Controller");
            window.App.container.show(new FirstTab({collection: window.App.lists}));
            window.App.navi.show(new NaviItemView());
		},
        first: function(){
            console.log('first');
        },
        second: function(){
            console.log('second');
        },
        third: function(){
            console.log('third');
        }

	});

});
