(function() {
	'use strict';

	var root = this;

	root.define([
		'models/Result'
		],
		function( Result ) {

			describe('Result Model', function () {

				it('should be an instance of Result Model', function () {
					var Result = new Result();
					expect( Result ).to.be.an.instanceof( Result );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );