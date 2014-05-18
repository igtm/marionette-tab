define([
	'backbone',
	'views/item/SContentItemView',
	'hbs!tmpl/composite/SContentCompositeView_tmpl',
    'models/Result',
    'communicator'
],
function( Backbone, Scontentitemview, ScontentcompositeviewTmpl, Result, Communicator ) {
    'use strict';

	/* Return a CompositeView class definition */
	return Backbone.Marionette.CompositeView.extend({

		initialize: function() {
			console.log("initialize a Scontentcompositeview CompositeView");
            Communicator.command.setHandler('invalid',this.invalid,this);
		},
		
    	itemView: Scontentitemview,
    	
    	template: ScontentcompositeviewTmpl,
    	

    	/* ui selector cache */
    	ui: {
            num1: '#num1',
            num2: '#num2',
            loading: '#loading',
            error: '#error'
        },

    	/* where are we appending the items views */
    	itemViewContainer: "#lists",

		/* Ui events hash */
		events: {
            'click #calcButton': 'calculate'
        },

        calculate: function(){
            console.log('calculate');
            this.ui.loading.html('<img src="images/loading.gif" />');
            var num1 = this.ui.num1.val();
            var num2 = this.ui.num2.val();
            this.ui.error.html(''); //errorを空に
            if(_.isEmpty(num1) || _.isEmpty(num2)){ //手作りvalidate（本当はModel#validateを使うのだと思うけど）
                this.invalid();
            }else {
                this.collection.fetch(
                    {
                        data:{num1: Number(num1), num2: Number(num2)},
                        remove: false,
                        success: function(res){
                             console.log('success');
                             console.log(res);
                        },error: function(){
                             console.log('error');
                    }}
                );
            }
            this.ui.loading.empty();
            this.ui.num1.val('');
            this.ui.num2.val('');
        },

        invalid: function(){
            console.log('This must not be empty!!');
            this.ui.error.html("This must not be empty!!");
        },

		/* on render callback */
		onRender: function() {}
	});

});
