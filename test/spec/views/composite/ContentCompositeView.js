(function() {
	'use strict';

	var root = this;

	root.define([
		'views/composite/ContentCompositeView'
		],
		function( Contentcompositeview ) {

			describe('Contentcompositeview Compositeview', function () {

				it('should be an instance of Contentcompositeview Compositeview', function () {
					var ContentCompositeView = new Contentcompositeview();
					expect( ContentCompositeView ).to.be.an.instanceof( Contentcompositeview );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );