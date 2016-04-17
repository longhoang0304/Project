$(window).scroll(function (argument) {
	var wScroll = $(this).scrollTop();
	//console.log(wScroll);
	var spd = 0.1;
	$("header > h1").css({
		'transform' : 'translate(0px, ' + (wScroll / 2) + '%)'
	});
	$("header > h4").css({
		'transform' : 'translate(0px, ' + (wScroll / 4) + '%)'
	}); 

	parallaxDiv("#content1",wScroll, spd);
	parallaxDiv("#content2",wScroll, spd);
	parallaxDiv("#content3",wScroll, spd);
	parallaxDiv("#content4",wScroll, spd);

	offset = $("footer").offset();
	$("footer > div").css({
		'transform' : 'translate(0px, ' + (offset.top - wScroll) * spd + 'px)'
	});  
	$("footer > h5").css({
		'transform' : 'translate(0px, ' + (offset.top - wScroll) * spd + 'px)'
	});  

});

function parallaxDiv(id, wScroll, spd) {
	var offset = $(id).offset();
	parallax(id+" > article > div > article",wScroll, offset.top, 0.5,'px');
	parallax(id+" > article > div > article.black",wScroll, offset.top, 0,'px');
	parallax(id+" > article > div > article > .des",wScroll, offset.top, -1,'px');
	parallax(id+" > article > div > article > .pic > img:first-child",wScroll, offset.top, 0.7,'px');
	parallax(id+" > article > div > article > .pic > img:nth-child(2)",wScroll, offset.top, -0.3,'px');
	parallax(id+" > article > div > article > .pic > img:nth-child(3)",wScroll, offset.top, 0.3,'px');
	parallax(id+" > .p > ul",wScroll, offset.top - 1000, spd,'px');
	parallax(id+" .arrw",wScroll, offset.top, 0.25,'px');
}

//này thì chuyển động :))

function parallax(selector, wScroll, offsetTop, spd, unit) {
	$(selector).css({
		'transform' : 'translate(0px, ' + (offsetTop - wScroll) * spd + unit+')'
	});  	
}

var counterList = {"content1":0,"content2":0,"content3":0,"content4":0};
var divList = {"content1":4,"content2":2,"content3":4,"content4":5};

$(document).ready(function() {
	$(".next").click(function() {
		
		var x = $(this).parent().parent().attr('id');
		var c = divList[x];
		counterList[x];
		if(counterList[x] < c - 1) {
			counterList[x]++;
			/*console.log(counter);*/
			var p = $(this).parent().parent().attr('id');
			var selector = "#"+ p + "> nav > ul";
			next(selector,'li','now');

			selector = "#"+ p + "> article";
			next(selector,'div','showContent');
		}

		//changeBackground(divBackground, counter, selector, 'div','showC');

	})

	$(".back").click(function() {
		var x = $(this).parent().parent().attr('id');
		if(counterList[x] > 0)
			counterList[x]--;
		var p = $(this).parent().parent().attr('id');
		var selector = "#"+ p + "> nav > ul";
		prev(selector,'li','now');

		selector = "#"+ p + "> article";
		prev(selector,'div','showContent');
		
		//changeBackground(selector, counter, 'div','showC');

	})

	function prev(selector, tag, id) {
		selector = selector + "> "+tag+"#"+id;
		var a = $(selector).prev();
		if(a.length != 0) {
			a.attr('id',id);
			$(selector+":last").removeAttr('id');
		}
	}

	function next(selector, tag, id) {
		selector = selector + "> "+tag+"#"+id;
		var a = $(selector).next();
		if(a.length != 0) {
			a.attr('id',id);
			$(selector+":first").removeAttr('id');
		}
	}

	function changeContent(selector, i) {
		selector = "#" + selector;
		$(selector + "> article > #showContent").removeAttr('id');
		selector = selector + "> article > .content:nth-child("+(i+1)+")";
		$(selector).attr('id','showContent');
		
	}

	function changeBackground(backgroundArr, counter, selector, tag, id) {
		selector = selector + "> "+tag+"#"+id;
		$(selector).css(
			"background-image","url('"+backgroundArr[counter]+"')"
		);
	}
	//smooth scrolling
	$('a').click(function(){
		var a = $($(this).attr('href')).offset().top;
	    $('html, body').animate({
	        scrollTop: a+70
	    }, 1000);
	    return false;
	});
	
	//thay đổi nội dung khi click vào li

	$(".p li").click(function() {
		var p = $(this).parent().parent().parent().attr('id');
		var x = $(this).parent().parent().attr('id');
		var selector = "#"+ p + "> nav > ul";
		selector = selector + "> li#now";
		$(selector).attr('id','');
	  	var index = $(this).parent().children().index(this);
	  	counterList[x] = index;
	  	$(this).attr('id','now');
	  	selector = "#"+ p + "> nav > ul";

	  	changeContent(p, index);
	});

	$("footer h1").mouseover(function() {
		var isChrome = !!window.chrome && !!window.chrome.webstore;
		if(isChrome) {
			$("footer h1").attr('class',"hover");
		} else {
			$("footer h1").attr('class',"hoverFF");
		}

	});
	$("footer h1").mouseleave(function() {
		$("footer h1").removeAttr('class');
	});	

	//////////////////////////////////////////////

	$("video").mouseover(function() {
		 if($(this)[0].paused) {
		 	$(this).next().html("PLAY");
		 } else {
		 	$(this).next().html("PAUSE");
		 }
	});

	$(".play").click(function() {
		$(this).prev()[0].paused ? $(this).prev()[0].play() : $(this).prev()[0].pause();
	});

});
