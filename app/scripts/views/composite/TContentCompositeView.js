define([
	'backbone',
	'hbs!tmpl/composite/TContentCompositeView_tmpl'
],
function( Backbone, TcontentcompositeviewTmpl  ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Tcontentcompositeview CompositeView");
		},
    	
    	template: TcontentcompositeviewTmpl,


        /* ui selector cache */
        ui: {
            red: '#red-text',
            blue: '#blue-text',
            yellow: '#yellow-text',
            subject: '#subject',
            result: '#result'
        },

        /* Ui events hash */
        events: {
            'click #button': 'search'
        },

        search: function(){
            var red = this.ui.red.val();
            var blue = this.ui.blue.val();
            var yellow = this.ui.yellow.val();
            var subject = this.ui.subject.val();

            var tagRed = '<span class="red">'+red+'</span>';
            var comp = subject.split(red).join(tagRed);
            var tagBlue = '<span class="blue">'+blue+'</span>';
            var comp = comp.split(blue).join(tagBlue);
            var tagYellow = '<span class="yellow">'+yellow+'</span>';
            var comp = comp.split(yellow).join(tagYellow);

            this.ui.result.html(comp);

        },
        insert: function(){

        },

		/* on render callback */
		onRender: function() {}
	});

});
