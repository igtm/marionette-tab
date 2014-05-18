(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/Results'
		],
		function( Results ) {

			describe('Results Collection', function () {

				it('should be an instance of Results Collection', function () {
					var Results = new Results();
					expect( Results ).to.be.an.instanceof( Results );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );