define([
	'backbone',
	'hbs!tmpl/layout/SecondTab_tmpl'
],
function( Backbone, SecondtabTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Secondtab Layout");
		},
		
    	template: SecondtabTmpl,
    	

    	/* Layout sub regions */
    	regions: {
            header: '#header',
            content: '#content'
        },

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
