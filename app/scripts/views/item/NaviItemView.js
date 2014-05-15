define([
	'backbone',
	'hbs!tmpl/item/NaviItemView_tmpl'
],
function( Backbone, NaviitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Naviitemview ItemView");
		},
		
    	template: NaviitemviewTmpl,

        tagName: 'nav',
        

    	/* ui selector cache */
    	ui: {},

		/* Ui events hash */
		events: {
            'click a': 'checked'
        },

        checked: function(attrs){
            console.log(attrs);
        },
		/* on render callback */
		onRender: function() {}
	});

});
