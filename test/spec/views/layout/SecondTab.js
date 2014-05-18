(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/SecondTab'
		],
		function( Secondtab ) {

			describe('Secondtab Layout', function () {

				it('should be an instance of Secondtab Layout', function () {
					var SecondTab = new Secondtab();
					expect( SecondTab ).to.be.an.instanceof( Secondtab );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );