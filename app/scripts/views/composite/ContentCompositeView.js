define([
	'backbone',
    'jquery',
	'views/item/ContentItemView',
    'models/List',
	'hbs!tmpl/composite/ContentCompositeView_tmpl'
],
function( Backbone, $, Contentitemview, List, ContentcompositeviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Contentcompositeview CompositeView");
		},
		
    	itemView: Contentitemview,
    	
    	template: ContentcompositeviewTmpl,
    	

    	/* ui selector cache */
    	ui: {
            input: '#input',
            lists: '#lists'
        },

    	/* where are we appending the items views */
    	itemViewContainer: "#lists",

		/* Ui events hash */
		events: {
            'keypress #input': 'enter'
        },

        enter: function(e){
            if(e.keyCode !== 13){return;} // enter
            console.log(this.ui.input.val());
            if(this.ui.input.val() === ''){return;} // ''
            var model = new List({title: this.ui.input.val()});
            this.collection.add(model);
            this.ui.input.val('');
        },

		/* on render callback */
		onRender: function() {}
	});

});
