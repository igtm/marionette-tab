(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/SHeaderItemView'
		],
		function( Sheaderitemview ) {

			describe('Sheaderitemview Itemview', function () {

				it('should be an instance of Sheaderitemview Itemview', function () {
					var SHeaderItemView = new Sheaderitemview();
					expect( SHeaderItemView ).to.be.an.instanceof( Sheaderitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );