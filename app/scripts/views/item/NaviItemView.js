define([
	'backbone',
     'jquery',
     'communicator',
	'hbs!tmpl/item/NaviItemView_tmpl'
],
function( Backbone,$, Communicator, NaviitemviewTmpl  ) {
    'use strict';

	/* Return a ItemView class definition */
	return Backbone.Marionette.ItemView.extend({

		initialize: function() {
			console.log("initialize a Naviitemview ItemView");
		},
		
    	template: NaviitemviewTmpl,

        tagName: 'nav',
        

    	/* ui selector cache */
    	ui: {
        },

		/* Ui events hash */
		events: {
            'touchstart li': 'checked'
        },

        checked: function(e){ // eはクリックされたオブジェクト。target.idでid target.classNameでclassを取得できる
            var className = e.target.className;
            var id = e.target.id;
            var current_checked = this.$el.find('.checked');
            if(className !== 'checked'){
                this.$el.find('#'+id).addClass('checked');
                current_checked.removeClass('checked');
                Communicator.command.execute(id); // -> Router
            }
        },
		/* on render callback */
		onRender: function() {}
	});

});
