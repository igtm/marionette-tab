define([
	'backbone',
	'hbs!tmpl/item/THeaderItemView_tmpl'
],
function( Backbone, TheaderitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Theaderitemview ItemView");
		},
		
    	template: TheaderitemviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
