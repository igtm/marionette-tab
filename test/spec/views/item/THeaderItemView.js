(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/THeaderItemView'
		],
		function( Theaderitemview ) {

			describe('Theaderitemview Itemview', function () {

				it('should be an instance of Theaderitemview Itemview', function () {
					var THeaderItemView = new Theaderitemview();
					expect( THeaderItemView ).to.be.an.instanceof( Theaderitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );