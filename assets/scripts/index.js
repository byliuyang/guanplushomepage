$(document).ready(function (){
	$("#nav-indicator").css("left",$("#nav-buttons>.active").offset().left).css("display", "block");

	// Nav bar animation
	$("#nav-buttons > li").mouseover(function () {
		$("#nav-indicator").css("left",$(this).offset().left).css("display", "block");
	})

	$("#nav-buttons > li").mouseout(function(){
		$("#nav-indicator").css("left",$("#nav-buttons > .active").offset().left);
	})

	// Scroll effects
	var navBarHeight = $("nav").height();
	var featuresFirstChildScrollTop = $("#features > li:nth-child(1)").offset().top - navBarHeight;
	var featuresFirstChildScrollBottom = featuresFirstChildScrollTop + $("#features > li:nth-child(1)").height() / 2;

	var featuresSecondChildScrollTop = $("#features > li:nth-child(2)").offset().top - navBarHeight;
	var featuresSecondChildScrollBottom = featuresSecondChildScrollTop + $("#features > li:nth-child(2)").height() / 2;

	
	$(window).scroll(function() {
		var scrollTop = $(window).scrollTop();
		if((scrollTop > featuresFirstChildScrollTop) && (scrollTop < featuresFirstChildScrollBottom)) {
			if(!$("#features > li:nth-child(1)").hasClass("active")) {
				$("#features > li:nth-child(1)").addClass("active");
			}
		}
		else {
			if($("#features > li:nth-child(1)").hasClass("active")) {
				$("#features > li:nth-child(1)").removeClass("active");
			}


			if((scrollTop > featuresSecondChildScrollTop) && (scrollTop < featuresSecondChildScrollBottom)) {
				if(!$("#features > li:nth-child(2)").hasClass("active")) {
					$("#features > li:nth-child(2)").addClass("active");
				}
			}
			else {
				if($("#features > li:nth-child(2)").hasClass("active")) {
					$("#features > li:nth-child(2)").removeClass("active");
				}
			}
		}
	});
});