'use strict'
//app.js
var $ = require('jquery');
console.log('hello world');

//home page
$(document).ready(function() {
	var bodyHeight = $(window).height();
	var bodyWidth = $(window).width();
	// $('#cardfan').css('margin-left', (bodyWidth/2.75) + 'px');
	$('#cardfan').css('margin-top', (bodyHeight/4) + 'px');
	for(var i = 0; i < 30; i++) {
		$('<div class="card genericcard">' + i + '</div>').appendTo('body');
	}
	$('.genericcard').each(function() {
		var rNum = Math.random()*359;
		var xScatter = Math.random()* bodyWidth;
		var yScatter = Math.random() * bodyHeight;
		var bgImage = (Math.floor(Math.random() * 69) + 1) + '.jpg';
		$(this).css( {
			"-webkit-transform": "rotate("+rNum+"2deg)",
			"-moz-transform": "rotate("+rNum+"2deg)",
			"top": yScatter + 'px',
			"left": xScatter + 'px',
		});
	});
});
