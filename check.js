var p = "Image/";
var backgroundArr = ["mc2.jpg","halong1.jpg","sd.jpg","mc.jpg","20.jpg"];
var bgLength = backgroundArr.length;
var i = 0;
//shorter, better :))
var ls = localStorage;

$(document).ready(function() {
	function changeBackground(index) {
			$('body').animate({opacity: 0.9}, 100, function() {
		        $(this)
		            .css({'background-image': 'url('+p+backgroundArr[(i++)%bgLength]+')','transition':'0.5s'})
		            .animate({opacity: 1});
	    	});
		}
	setInterval(function() {changeBackground()},5000);

	

});