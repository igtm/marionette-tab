(function() {
	'use strict';

	var root = this;

	root.define([
		'regions/AppRegion'
		],
		function( Appregion ) {

			describe('Appregion Region', function () {

				it('should be an instance of Appregion Region', function () {
					var AppRegion = new Appregion();
					expect( AppRegion ).to.be.an.instanceof( Appregion );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );