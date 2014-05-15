(function() {
	'use strict';

	var root = this;

	root.define([
		'views/item/NaviItemView'
		],
		function( Naviitemview ) {

			describe('Naviitemview Itemview', function () {

				it('should be an instance of Naviitemview Itemview', function () {
					var NaviItemView = new Naviitemview();
					expect( NaviItemView ).to.be.an.instanceof( Naviitemview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );