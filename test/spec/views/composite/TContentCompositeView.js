(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/TContentCompositeView'
		],
		function( Tcontentcompositeview ) {

			describe('Tcontentcompositeview Compositeview', function () {

				it('should be an instance of Tcontentcompositeview Compositeview', function () {
					var TContentCompositeView = new Tcontentcompositeview();
					expect( TContentCompositeView ).to.be.an.instanceof( Tcontentcompositeview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );