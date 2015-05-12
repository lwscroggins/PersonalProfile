'use strict'
//app.js
var $ = require('jquery');
console.log('hello world');

//home page
$(document).ready(function() {
	for(var i = 0; i < 10; i++) {
		$('<div class="card genericcard">' + i + '</div').appendTo('body');
	}
	$('.genericcard').each( function() {
		var rNum = (Math.random()*180);
		$(this).css( {
			'-webkit-transform': 'rotate('+rNum+'2deg)',
			'-moz-transform': 'rotate('+rNum+'2deg)',
		});
	});
});
