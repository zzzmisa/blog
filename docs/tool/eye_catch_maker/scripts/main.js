$(function() {

	$( "#download" ).click(function() {
		html2canvas($("#screenshot-area"), {			
			onrendered: function(canvas) {
				var dataUrl = canvas.toDataURL("image/png");   // PNG形式
				var event = document.createEvent("MouseEvents");
				event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				var a = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
				a.href = dataUrl;
				a.download = "output";
				a.dispatchEvent(event);
			}
		}); 
	});


	$( "#go" ).click(function() {

		icon_input = $("#icon_input").val();
		text_input = $("#text_input").val();
		color_input = $("#color_input").val();
		color_input2 = $("#color_input2").val();

		$("#append_area").empty();
		$("#append_area").append('<i class="' + icon_input + '"></i>');
		$("#append_area").append('<br>' + text_input);
		string="linear-gradient(" + color_input + ")";
		$("#screenshot-area").css("background", string);
	});
});
