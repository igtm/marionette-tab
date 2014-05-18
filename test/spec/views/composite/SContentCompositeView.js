(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/SContentCompositeView'
		],
		function( Scontentcompositeview ) {

			describe('Scontentcompositeview Compositeview', function () {

				it('should be an instance of Scontentcompositeview Compositeview', function () {
					var SContentCompositeView = new Scontentcompositeview();
					expect( SContentCompositeView ).to.be.an.instanceof( Scontentcompositeview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );