(function() {
	'use strict';

	var root = this;

	root.define([
		'collections/Lists'
		],
		function( Lists ) {

			describe('Lists Collection', function () {

				it('should be an instance of Lists Collection', function () {
					var Lists = new Lists();
					expect( Lists ).to.be.an.instanceof( Lists );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );