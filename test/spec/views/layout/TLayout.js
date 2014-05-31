(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/TLayout'
		],
		function( Tlayout ) {

			describe('Tlayout Layout', function () {

				it('should be an instance of Tlayout Layout', function () {
					var TLayout = new Tlayout();
					expect( TLayout ).to.be.an.instanceof( Tlayout );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );