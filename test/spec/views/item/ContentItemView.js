(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/ContentItemView'
		],
		function( Contentitemview ) {

			describe('Contentitemview Itemview', function () {

				it('should be an instance of Contentitemview Itemview', function () {
					var ContentItemView = new Contentitemview();
					expect( ContentItemView ).to.be.an.instanceof( Contentitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );