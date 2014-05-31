define([
	'backbone',
	'hbs!tmpl/layout/TLayout_tmpl'
],
function( Backbone, TlayoutTmpl  ) {
    'use strict';

	/* Return a Layout class definition */
	return Backbone.Marionette.Layout.extend({

		initialize: function() {
			console.log("initialize a Tlayout Layout");
		},
		
    	template: TlayoutTmpl,
    	

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
