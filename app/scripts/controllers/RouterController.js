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
            Communicator.command.execute('firstTab',true);
        },
        second: function(){
            console.log('second');
            Communicator.command.execute('secondTab',true);
        },
        third: function(){
            console.log('third');
            Communicator.command.execute('thirdTab',true);
        }

	});

});
