var counter = 0;
var index;
var p = "Image/";
var h = "#header";
var i = "show";
var s = "#show";

var backgroundArr = ["sapa.jpg","halong1.jpg","sd.jpg","mc.jpg","6.jpg","14.jpg"];
var textArr = ['SAPA','VỊNH HẠ LONG','SƠN ĐOÒNG','MỘC CHÂU'];
var counter = 0;
//data
var ticket = {'tdate':'','ttime':'','from':'','to':'','ticknum':0,'price':0};
var info = {'fname':'','lname':'','bd':'','phone':'','email':'','add':'','cmnd':''};
var ticketinfo = {'tickinfo':ticket,'user':info};
var tickprice = [2000000,3000000,70000000,1000000];

var ls = localStorage;

$(document).ready(
	function() {
		//khỏi cần tham số vì biết hết trơn rồi :))
		function prevdiv() {
			/*if(counter==3) {
				translate('h1',-170,0.5);
			}*/
			if(counter > 0) {
				counter--;
				var a = $(s).prev();
				if(!counter) {
					a.attr('class','landing');
					$(s+":last").removeAttr('id');
					a.attr('id','show');
					translate('h1',10,0.5);
				} else {
					if(a.length != 0) {
						$(s+":last").removeAttr('id');
						a.attr('id',i);
					}
				}
			}
		}

		function nextdiv() {
			if(counter < 3) {
				if(!counter) {
					$(s).attr('class','content')
				}
				var a = $(s).next();
				if(a.length != 0) {
					a.attr('id',i);
					$(s+":first").removeAttr('id');
				}
				counter++;
			}
			if(counter == 3) {
				translate('h1',10,0.5);
				$('h1').text("ĐÃ HOÀN TẤT ĐĂNG KÝ");
				$('.content > article').animate({
					bottom: "+=25%"
				},400);
				var randId;
				do { 
					randId = Math.random()*1000000 + 1;
				} while(ls.getItem(randId.toString()) !== null);
				randId = Math.round(randId).toString(); 
				ls.setItem(randId, JSON.stringify(ticketinfo));
				$("#tickid").html(randId);
			}
			return false;
		}

		function changeHeader(index) {
			$('h1').animate({opacity: 0.9}, 200, function() {
		        $(this)
		            .text(textArr[index])
		            .animate({opacity: 1},200);
	    	});
		}

		function changeBackground(index) {
			$('body').animate({opacity: 0.9}, 100, function() {
		        $(this)
		            .css({'background-image': 'url('+p+backgroundArr[index]+')','transition':'0.5s'})
		            .animate({opacity: 1});
	    	});
		}

		function translate(selector, percent, time) {
			$(selector).css({'transform': 'translateY('+percent+'%)','transition':time+'s'});
		}

		function getValueFromTicket() {
			var input = [];
			var a = $('#ticket input, #ticket select').each(function(){  
					var t = $(this);
			    	input.push(t.val());
			    }
			);
			ticket.tdate = input[0];
			ticket.ttime = input[1];
			ticket.from = input[2];
			ticket.ticknum = parseInt(input[3]);
			ticket.price = tickprice[index] * ticket['ticknum'];
			//console.log(ticket);
		}

		function getValueFromInfo() {
			var input = [];
			var a = $('#info input, #info select').each(function(){  
					var t = $(this);
			    	input.push(t.val());
			    }
			);
			info.fname = input[0];
			info.lname = input[1];
			info.bd = input[2];
			info.phone = input[3];
			info.email = input[4];
			info.add = input[5];
			info.cmnd = input[6];
			//console.log(info);
		}

		//thay đổi nội dung khi click vào li

		$("li").click(function() {
			translate('h1',-170,0.5);
			$("#price").val(tickprice[index]);
			ticket.to = textArr[index];
			nextdiv();
		});

		$("form").submit(function() {
			var check;
			switch(counter) {
				case 1: {
					getValueFromTicket();
					break;
				}
				case 2: {
					getValueFromInfo();
					break;
				}
			}
			
			check = confirm("Bạn có muốn tiếp tục?");
			$("#ticket")[0].reset();
			$("#info")[0].reset();
			if(!check)
				return false;
			return nextdiv();
		});

		$(".back").click(function() {
			prevdiv();
			
		});

		$("li").mouseover(function() {
			index = $(this).parent().children().index(this);
			changeBackground(index);
			changeHeader(index);

		});

		$("#ticknum").change(function() {
			$("#price").val(tickprice[index] * $(this).val());
		});

		$(":reset").click(function(){
			//[0] để chuyển về java sờ chíp style
			$("#ticket")[0].reset();
			//console.log($("#ticket"));
			$("#info")[0].reset();
			$("#price").val(tickprice[index]);
			return false;
		});
});
