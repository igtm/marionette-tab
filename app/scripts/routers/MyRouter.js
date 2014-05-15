define([
	'backbone'
],
function(Backbone){
    'use strict';

	return Backbone.Marionette.AppRouter.extend({
		/* Backbone routes hash */
        initialize: function(){
          console.log('Router initialize');

        },

		appRoutes: {
            '': 'first',
            'first': 'first',
            'second': 'second',
            'third': 'third'
        }
	});
});
