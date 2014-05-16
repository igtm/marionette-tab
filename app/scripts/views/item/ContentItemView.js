define([
	'backbone',
	'hbs!tmpl/item/ContentItemView_tmpl'
],
function( Backbone, ContentitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Contentitemview ItemView");
		},
		
    	template: ContentitemviewTmpl,

        tagName: 'li',
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
