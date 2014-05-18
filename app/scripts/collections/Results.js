define([
	'backbone',
	'models/Result'
],
function( Backbone, Result ) {
    'use strict';

	/* Return a collection class definition */
	return Backbone.Collection.extend({
		initialize: function() {
			console.log("initialize a Results collection");
		},

		model: Result,

        url: 'http://i-and-i.main.jp/sample/php/test.php',

        parse: function(res){
            console.log('fetchのparse:'+res);
            return res;
        }
		
	});
});
