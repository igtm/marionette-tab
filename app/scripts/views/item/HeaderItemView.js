define([
	'backbone',
	'hbs!tmpl/item/HeaderItemView_tmpl'
],
function( Backbone, HeaderitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Headeritemview ItemView");
		},
		
    	template: HeaderitemviewTmpl,

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
