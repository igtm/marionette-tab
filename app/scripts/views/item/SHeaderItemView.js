define([
	'backbone',
	'hbs!tmpl/item/SHeaderItemView_tmpl'
],
function( Backbone, SheaderitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Sheaderitemview ItemView");
		},
		
    	template: SheaderitemviewTmpl,
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
