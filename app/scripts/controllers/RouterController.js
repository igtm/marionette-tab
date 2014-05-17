define([
	'backbone',
    'communicator',
    'views/layout/FirstTab',
    'Views/item/NaviItemView'
],
function( Backbone,Communicator, FirstTab, NaviItemView ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Routercontroller Controller");

		},
        first: function(){
            console.log('first');
            Communicator.command.execute('firstTab',true); // -> ContainerRegion
        },
        second: function(){
            console.log('second');
            Communicator.command.execute('secondTab',true); // -> ContainerRegion
        },
        third: function(){
            console.log('third');
            Communicator.command.execute('thirdTab',true); // -> ContainerRegion
        }

	});

});
