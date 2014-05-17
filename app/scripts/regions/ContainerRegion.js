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

        //それぞれ３枚のViewを[this.--TLayout],[this.--HItemView],[this.--CCompositeView]に保存
        firstTab: function(){
            if(!this.FTLayout) { //初回のみ３枚のViewを作成
                console.log('作成！！');
                this.FTLayout = new FirstTabLayout();
                this.FHItemView = new HeaderItemView();
                this.FCCompositeView = new ContentCompositeView(({collection: this.firstCollection}));
            }
                this.show(this.FTLayout,{preventClose: true});
                this.FTLayout.header.show(this.FHItemView,{preventClose: true});
                this.FTLayout.content.show(this.FCCompositeView,{preventClose: true});
        },
        secondTab: function(){
            if(!this.STLayout) { //初回のみ３枚のViewを作成
                console.log('作成！！');
                this.STLayout = new FirstTabLayout();
                this.SHItemView = new HeaderItemView();
                this.SCCompositeView = new ContentCompositeView(({collection: this.secondCollection}));
            }
                this.show(this.STLayout,{preventClose: true});
                this.STLayout.header.show(this.SHItemView,{preventClose: true});
                this.STLayout.content.show(this.SCCompositeView,{preventClose: true});
        },
        thirdTab: function(){
            if(!this.TTLayout) { //初回のみ３枚のViewを作成
                console.log('作成！！');
                this.TTLayout = new FirstTabLayout();
                this.THItemView = new HeaderItemView();
                this.TCCompositeView = new ContentCompositeView(({collection: this.thirdCollection}));
            }
                this.show(this.TTLayout,{preventClose: true});
                this.TTLayout.header.show(this.THItemView,{preventClose: true});
                this.TTLayout.content.show(this.TCCompositeView,{preventClose: true});
        }
	});

});
