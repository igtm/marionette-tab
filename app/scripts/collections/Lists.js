define([
	'backbone',
	'models/List'
],
function( Backbone, List ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Lists collection");
		},

		model: List
		
	});
});
