define([
	'backbone',
    'communicator',
    'views/layout/FirstTab',
    'collections/Lists',
    'collections/Results',
    'views/item/HeaderItemView',
    'views/composite/ContentCompositeView',
    'views/layout/SecondTab',
    'views/item/SHeaderItemView',
    'views/composite/SContentCompositeView',
    'views/composite/TContentCompositeView',
    'views/item/THeaderItemView',
    'views/layout/TLayout'
],
function( Backbone, Communicator, FirstTabLayout, Lists, Results, HeaderItemView, ContentCompositeView, SecondTabLayout, SHeaderItemView, SContentCompositeView, TContentCompositeView, THeaderItemView, TLayout) {
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
            this.secondCollection = new Results();
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
                this.STLayout = new SecondTabLayout();
                this.show(this.STLayout);
                this.STLayout.header.show(new SHeaderItemView());
                this.STLayout.content.show(new SContentCompositeView(({collection: this.secondCollection})));
        },
        thirdTab: function(){
                this.TTLayout = new TLayout();
                this.show(this.TTLayout);
                this.TTLayout.header.show(new THeaderItemView());
                this.TTLayout.content.show(new TContentCompositeView());
        }
	});

});
