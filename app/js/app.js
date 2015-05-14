'use strict'
//app.js
var $ = require('jquery');

//home page
$(document).ready(function() {
	//set up body
	var bodyHeight = $(window).height();
	var bodyWidth = $(window).width();
	//create x number of random cards generic cards and put in body
	$('#cardfan').css('margin-top', (bodyHeight/4) + 'px');
	for(var i = 0; i < 10; i++) {
		$('<div class="card genericcard"><div class="cardoverlay"</div></div>').appendTo('#content');
	}
	//randomly scatter generic cards around the page and provide backgrounds
	$('.genericcard').each(function() {
		var rNum = Math.random()*359;
		var xScatter = Math.random()* bodyWidth;
		var yScatter = Math.random() * bodyHeight;
		var bgImage = (Math.floor(Math.random() * 21) + 1) + '.jpg';
		$(this).css( {
			"-webkit-transform": "rotate("+rNum+"2deg)",
			"-moz-transform": "rotate("+rNum+"2deg)",
			"top": yScatter + 'px',
			"left": xScatter + 'px',
			"background": 'url(/img/' + bgImage + ') no-repeat',
			"background-size": "cover"
		});
	});
});
