(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/MyRouter'
		],
		function( Myrouter ) {

			describe('Myrouter Router', function () {

				it('should be an instance of Myrouter Router', function () {
					var MyRouter = new Myrouter();
					expect( MyRouter ).to.be.an.instanceof( Myrouter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );