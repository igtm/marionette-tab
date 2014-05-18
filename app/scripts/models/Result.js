define([
	'backbone',
    'underscore'
],
function( Backbone, _ ) {
    'use strict';

	/* Return a model class definition */
	return Backbone.Model.extend({
		initialize: function() {
			console.log("initialize a Result model");
		},

		defaults: {
            num1:'',
            num2:'',
            result:''
        }

    });
});
