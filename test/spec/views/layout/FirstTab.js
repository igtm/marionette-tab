(function() {
	'use strict';

	var root = this;

	root.define([
		'views/layout/FirstTab'
		],
		function( Firsttab ) {

			describe('Firsttab Layout', function () {

				it('should be an instance of Firsttab Layout', function () {
					var FirstTab = new Firsttab();
					expect( FirstTab ).to.be.an.instanceof( Firsttab );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );