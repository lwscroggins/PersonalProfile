'use strict'
//app.js
var $ = require('jquery');
console.log('hello world');

//home page
$(document).ready(function() {
	var bodyHeight = $(window).height();
	var bodyWidth = $(window).width();
	$('#cardfan').css('margin-left', (bodyWidth/3) + 'px');
	$('#cardfan').css('top', (bodyHeight/5) + 'px');
	for(var i = 0; i < 30; i++) {
		$('<div class="card genericcard">' + i + '</div>').appendTo('body');
	}
	$('.genericcard').each(function() {
		var rNum = Math.random()*180;
		var xScatter = Math.random()* bodyWidth;
		var yScatter = Math.random() * bodyHeight;
		$(this).css( {
			"-webkit-transform": "rotate("+rNum+"2deg)",
			"-moz-transform": "rotate("+rNum+"2deg)",
			"top": yScatter + 'px',
			"left": xScatter + 'px'
		});
	});
});
