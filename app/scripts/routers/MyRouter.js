define([
	'backbone',
    'communicator'
],
function(Backbone, Communicator){
    'use strict';

	return Backbone.Marionette.AppRouter.extend({
		/* Backbone routes hash */
        initialize: function(){
          console.log('Router initialize');
          // <- NaviItemView URLを変える
          Communicator.command.setHandler('first',this.first,this);
          Communicator.command.setHandler('second',this.second,this);
          Communicator.command.setHandler('third',this.third,this);
        },

		appRoutes: {
            '': 'first',
            'first': 'first',
            'second': 'second',
            'third': 'third'
        },
        first: function(){
            this.navigate('#first', true);
        },
        second: function(){
            this.navigate('#second', true);
        },
        third: function(){
            this.navigate('#third', true);
        }
	});
});
