define([
	'backbone',
    'communicator',
    'views/layout/FirstTab',
    'collections/Lists',
    'views/item/HeaderItemView',
    'views/composite/ContentCompositeView'
],
function( Backbone, Communicator, FirstTabLayout, Lists, HeaderItemView, ContentCompositeView) {
    'use strict';

	/* Return a Region class definition */
	return Backbone.Marionette.Region.extend({

		initialize: function() {
			console.log("initialize a Containerregion Region");
            Communicator.command.setHandler('firstTab',this.firstTab,this);
            Communicator.command.setHandler('secondTab',this.secondTab,this);
            Communicator.command.setHandler('thirdTab',this.thirdTab,this);

            this.firstCollection = new Lists();
            this.secondCollection = new Lists();
            this.thirdCollection = new Lists();
        },
        el: '#container',

        firstTab: function(){
                this.first = new FirstTabLayout();
                this.show(this.first);
                this.first.header.show(new HeaderItemView());
                this.first.content.show(new ContentCompositeView({collection: this.firstCollection}));
        },
        secondTab: function(){
                this.second = new FirstTabLayout();
                this.show(this.second);
                this.second.header.show(new HeaderItemView());
                this.second.content.show(new ContentCompositeView({collection: this.secondCollection}));
        },
        thirdTab: function(){
                this.third = new FirstTabLayout();
                this.show(this.third);
                this.third.header.show(new HeaderItemView());
                this.third.content.show(new ContentCompositeView({collection: this.thirdCollection}));
        }
	});

});
