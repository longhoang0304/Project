$(document).ready(function() {

	$("button").click(function(){
		var v = $("input").val();
		//chỉ cho phép nhập số
		if(v.match(/^[0-9]+$/)) {
			if(ls.getItem(v) === null) {
				alert("Mã vé không tồn tại. \nTrong trường hợp bạn đã quên mã vé.\n \
				Xin hãy liên hệ với chúng tôi để được cấp lại")
			} else {
				var t = ls.getItem(v);
				t = JSON.parse(t);
				/*console.log(ticketinfo);
				console.log(ticketinfo.tickinfo);
				console.log(ticketinfo.user);*/
				$("#dataGoesHere").html("<h1>Thông tin đăng ký</h1>");
				$("#dataGoesHere").append("Tên: "+t.user.fname+" "+t.user.lname);
				$("#dataGoesHere").append("<br />Ngày sinh: "+t.user.bd);
				$("#dataGoesHere").append("<br />SDT: "+t.user.phone);
				$("#dataGoesHere").append("<br />Email: "+t.user.email);
				$("#dataGoesHere").append("<br />Địa chỉ: "+t.user.add);
				$("#dataGoesHere").append("<br />CMND: "+t.user.cmnd);
				$("#dataGoesHere").append("<br/ ><h1>Thông tin vé</h1>");
				$("#dataGoesHere").append("Mã vé: "+v);
				$("#dataGoesHere").append("<br />Địa điểm: "+t.tickinfo.to);
				$("#dataGoesHere").append("<br />Ngày khởi hành: "+t.tickinfo.tdate);
				$("#dataGoesHere").append("<br />Giờ khỏi hành: "+t.tickinfo.ttime);
				$("#dataGoesHere").append("<br />Nơi khởi hành: "+t.tickinfo.from);
				$("#dataGoesHere").append("<br />Số vé: "+t.tickinfo.ticknum);
				$("#dataGoesHere").append("<br />Giá: "+t.tickinfo.price);
				$("#dataGoesHere").append("<br /><br />Trạng thái: <strong>Chưa kích hoạt</strong>");
				$("#dataGoesHere").append("<h6>Vui lòng kiểm tra email hoặc sdt để kích hoạt và thanh toán trong vòng 7 ngày. Nếu không vé sẽ tự động được hủy.</h6>");
				$("#dataGoesHere").append("<h6>Nếu khách hàng muốn hủy vé. Xin hãy liên hệ với chúng tôi trước ngày khởi hành 7 ngày.</h6>");
				show();			
			}
		} else {
			alert("Xin hãy nhập đúng mã vẽ. \nTrong trường hợp bạn đã quên mã vé.\n \
			Xin hãy liên hệ với chúng tôi để được cấp lại");
		}
	});
	
	function show() {
		$("#ticketInformation").attr('class','show');
		$("#ticketInformation").animate({'opacity': '1'},200);
	}

	function hide(){
		$("#ticketInformation").animate({'opacity': '0'},200);
		$("#ticketInformation").attr('class','hide');
	}

	$("#close").click(function(){
		hide();
	});

	$("#about").click(function(){
		$("#dataGoesHere").html("<h1>Trụ Sở Chính</h1>");
		$("#dataGoesHere").append("Tên: Long Hoàng Phượt");
		$("#dataGoesHere").append("<br />Điện thoại: 0123456789");
		$("#dataGoesHere").append("<br />Hotline: 0123456788");
		$("#dataGoesHere").append("<br />Email: contact@longhoang.hp");
		$("#dataGoesHere").append("<br />Website: longhoang.hp");
		$("#dataGoesHere").append("<br />Địa chỉ: Lầu 2. Tòa nhà Innovation, lô 24, CVPM mềm Quang Trung, P.Tân Chánh Hiệp, Quận 12, TP. Hồ Chí Minh.");
		$("#dataGoesHere").append("<br /><h1>Trụ Sở tại Vương quốc Anh</h1>");
		$("#dataGoesHere").append("<br />Điện thoại: 0123456888");
		$("#dataGoesHere").append("<br />Hotline: 0123456999");
		$("#dataGoesHere").append("<br />Email: contact_uk@longhoang.hp");
		$("#dataGoesHere").append("<br />Website: longhoang.hp");
		$("#dataGoesHere").append("<br />Địa chỉ: 66 Bridge Rd, Stockton-on-Tees, Cleveland TS18 3DG, United Kingdom");
		show();
	});

	$("#term").click(function(){
		$("#dataGoesHere").html("<h1>Điều Khoản</h1>");
		$("#dataGoesHere").append("1. Tất cả các chuyến đi đều dài 7 ngày");
		$("#dataGoesHere").append("<br />2. Bạn phải thanh toán, đặt cọc (50%) trong vòng 7 ngày kể từ khi đăng ký.\
			Và thanh toán phần còn lại trước ngày đi một tuần");
		$("#dataGoesHere").append("<br />3. Khi đã đăng ký mà muốn hủy. \
			Thì bạn phải liên lạc với chúng tôi để thực hiện yêu cầu trước \
			ngày đi ít nhất một tuần để có thể lấy lại tiền cọc. \
			Nếu không tiền đặt cọc của khách hàng sẽ được lấy ra để thanh toán.");
		$("#dataGoesHere").append("<br />4. Tuyệt đối đúng giờ hẹn trước. \
			Khách tới trễ sẽ coi như hủy chuyến đi và không được nhận đền bù");
		$("#dataGoesHere").append("<br />5. Không được tự tiện thêm người. Nếu có, phải liên hệ để đăng ký và trả tiền thêm");
		$("#dataGoesHere").append("<br />6. Phải tuyệt đối theo chỉ dẫn của người hướng dẫn. \
			Không tự tiện tách đoàn, đi thám hiểm tự do khi chưa có sự cho phép.");
		$("#dataGoesHere").append("<br />7. Phải giữ gìn tài sản quốc gia khi đi phượt.\
			Không xả rác, phá hoại cảnh quan. Nếu phát hiện sẽ tính thêm tiền phạt và phục hồi cảnh quang.");
		$("#dataGoesHere").append("<br />8. Nếu muốn đi tự do xin hãy liên hệ với người hướng dẫn để được chỉ dẫn.");
		$("#dataGoesHere").append("<br />9. Phải luôn giữ liên lạc với người hướng dẫn để tránh lạc đường.");
		$("#dataGoesHere").append("<br />10. Khách hàng phải xuất trình CMND, vé khi lên xe");
		$("#dataGoesHere").append("<br />11. Phải tuân thủ luật pháp khi tham gia chuyến đi");
		$("#dataGoesHere").append("<br />12. Khách hàng phải tự giữ trang bị của mình. \
			Mọi mất chúng tôi sẽ không chịu trách nhiệm");
		$("#dataGoesHere").append("<br />13. Khách hàng phải đọc kỹ các\
			 điều khoảng này. Mọi thắc mắc xin hãy liên hệ để giải đáp");
		$("#dataGoesHere").append("<br />14. Khách hàng không đọc hoặc không biết các điều\
			 khoản này, nếu có vi phạm xảy ra vẫn phải chịu trách nhiệm");
		show();
	});
});