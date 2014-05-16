define([
	'backbone',
	'hbs!tmpl/layout/FirstTab_tmpl',
    'views/composite/ContentCompositeView',
    'views/item/HeaderItemView'
],
function( Backbone, FirsttabTmpl, ContentCompositeView, HeaderItemView ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Firsttab Layout");
		},
		
    	template: FirsttabTmpl,
    	

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
