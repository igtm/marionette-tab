(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/HeaderItemView'
		],
		function( Headeritemview ) {

			describe('Headeritemview Itemview', function () {

				it('should be an instance of Headeritemview Itemview', function () {
					var HeaderItemView = new Headeritemview();
					expect( HeaderItemView ).to.be.an.instanceof( Headeritemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );