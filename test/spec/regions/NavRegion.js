(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/NavRegion'
		],
		function( Navregion ) {

			describe('Navregion Region', function () {

				it('should be an instance of Navregion Region', function () {
					var NavRegion = new Navregion();
					expect( NavRegion ).to.be.an.instanceof( Navregion );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );