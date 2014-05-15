define([
	'backbone',
	'views/item/ContentItemView',
	'hbs!tmpl/composite/ContentCompositeView_tmpl'
],
function( Backbone, Contentitemview, ContentcompositeviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Contentcompositeview CompositeView");
		},
		
    	itemView: Contentitemview,
    	
    	template: ContentcompositeviewTmpl,
    	

    	/* ui selector cache */
    	ui: {},

    	/* where are we appending the items views */
    	itemViewContainer: "#lists",

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
