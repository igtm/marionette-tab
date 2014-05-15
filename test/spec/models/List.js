(function() {
	'use strict';

	var root = this;

	root.define([
		'models/List'
		],
		function( List ) {

			describe('List Model', function () {

				it('should be an instance of List Model', function () {
					var List = new List();
					expect( List ).to.be.an.instanceof( List );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );