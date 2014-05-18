define([
	'backbone',
	'hbs!tmpl/item/SContentItemView_tmpl',
    'communicator'
],
function( Backbone, ScontentitemviewTmpl, Communicator  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Scontentitemview ItemView");
		},
		
    	template: ScontentitemviewTmpl,

        tagName: 'li',

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {},

		/* on render callback */
		onRender: function() {}
	});

});
