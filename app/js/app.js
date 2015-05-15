'use strict'
//app.js
var $ = require('jquery');

//home page
$(document).ready(function() {
	//set up body
	var bodyHeight = $(window).height();
	var bodyWidth = $(window).width();
	$('body').css({
		"height": bodyHeight + 'px',
		"width": bodyWidth + 'px'
	});
	$('#content').css({
		"height": bodyHeight + 'px',
		"width": bodyWidth + 'px'
	});
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
	//control infocard click behavior
	$('.infocard').click(function() {
		debugger;
		var $this = $(this);
		var findid = $this.attr('id') + 'page';
		var transDeg = $this.css('transform');
		var cardHeight = $this.css('height');
		var cardWidth = $this.css('width');
		$this.css({"transform": "rotate(0deg)", "z-index": "98"}).animate({"top": "-100px"}, 600).animate({"height": "2000px", "width": "1500px", "left": "-100%", "top": "-100%"}, 600);
		setTimeout(function() {
			$this.closest('.page').addClass('hide');
			$this.closest('#content').find('#' + findid).removeClass('hide');
			$this.closest('#content').find('#navbar').removeClass('hide');
			$this.removeAttr('style');
		}, 1300);
	});
	//back to home
	$('#navhome').click(function() {
		$('#homepage').removeClass('hide');
		$('#navbar, .contentpage').addClass('hide');
	});
});
