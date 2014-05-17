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

            // Layout ごとのコレクション
            this.firstCollection = new Lists();
            this.secondCollection = new Lists();
            this.thirdCollection = new Lists();
        },
        el: '#container',

        //それぞれ Layout HeaderItemView ContentComposteView を作成
        firstTab: function(){
                this.FTLayout = new FirstTabLayout(); //Layout 作成
                this.show(this.FTLayout);            // Layout 表示
                this.FTLayout.header.show(new HeaderItemView());
                this.FTLayout.content.show(new ContentCompositeView(({collection: this.firstCollection})));
        },
        secondTab: function(){
                this.STLayout = new FirstTabLayout();
                this.show(this.STLayout);
                this.STLayout.header.show(new HeaderItemView());
                this.STLayout.content.show(new ContentCompositeView(({collection: this.secondCollection})));
        },
        thirdTab: function(){
                this.TTLayout = new FirstTabLayout();
                this.show(this.TTLayout);
                this.TTLayout.header.show(new HeaderItemView());
                this.TTLayout.content.show(new ContentCompositeView(({collection: this.thirdCollection})));
        }
	});

});
