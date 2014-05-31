(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/TContentItemView'
		],
		function( Tcontentitemview ) {

			describe('Tcontentitemview Itemview', function () {

				it('should be an instance of Tcontentitemview Itemview', function () {
					var TContentItemView = new Tcontentitemview();
					expect( TContentItemView ).to.be.an.instanceof( Tcontentitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );