(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/SContentItemView'
		],
		function( Scontentitemview ) {

			describe('Scontentitemview Itemview', function () {

				it('should be an instance of Scontentitemview Itemview', function () {
					var SContentItemView = new Scontentitemview();
					expect( SContentItemView ).to.be.an.instanceof( Scontentitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );