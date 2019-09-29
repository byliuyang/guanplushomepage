$(document).ready(function () {
    $("#nav-indicator").css("left", $("#nav-buttons>.active").offset().left).css("display", "block");

    // Nav bar animation
    $("#nav-buttons > li").mouseover(function () {
        $(this).css("color", "transparent");
        $(this).children("img").addClass("hover");
        $("#nav-indicator").css("left", $(this).offset().left).css("display", "block");
    })

    $("#nav-buttons > li").mouseout(function () {
        $(this).css("color", "white");
        $(this).children("img").removeClass("hover");
        $("#nav-indicator").css("left", $("#nav-buttons > .active").offset().left);
    })

    // Scroll effects
    var navBarHeight = $("nav").height();
    var featuresFirstChildScrollTop = $("#features > li:nth-child(1)").offset().top - navBarHeight;
    var featuresFirstChildScrollBottom = featuresFirstChildScrollTop + $("#features > li:nth-child(1)").height() / 2;

    var featuresSecondChildScrollTop = $("#features > li:nth-child(2)").offset().top - navBarHeight;
    var featuresSecondChildScrollBottom = featuresSecondChildScrollTop + $("#features > li:nth-child(2)").height() / 2;

    var featuresThirdChildScrollTop = $("#features > li:nth-child(3)").offset().top - navBarHeight;
    var featuresThirdChildScrollBottom = featuresThirdChildScrollTop + $("#features > li:nth-child(3)").height() / 2;

    var featuresForthChildScrollTop = $("#features > li:nth-child(4)").offset().top - navBarHeight;
    var featuresForthChildScrollBottom = featuresForthChildScrollTop + $("#features > li:nth-child(4)").height() / 2;


    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if ((scrollTop > featuresFirstChildScrollTop) && (scrollTop < featuresFirstChildScrollBottom)) {
            if (!$("#features > li:nth-child(1)").hasClass("active")) {
                $("#features > li:nth-child(1)").addClass("active");
            }
        } else {
            if ($("#features > li:nth-child(1)").hasClass("active")) {
                $("#features > li:nth-child(1)").removeClass("active");
            }


            if ((scrollTop > featuresSecondChildScrollTop) && (scrollTop < featuresSecondChildScrollBottom)) {
                if (!$("#features > li:nth-child(2)").hasClass("active")) {
                    $("#features > li:nth-child(2)").addClass("active");
                }
            } else {
                if ($("#features > li:nth-child(2)").hasClass("active")) {
                    $("#features > li:nth-child(2)").removeClass("active");
                }

                if ((scrollTop > featuresThirdChildScrollTop) && (scrollTop < featuresThirdChildScrollBottom)) {
                    if (!$("#features > li:nth-child(3)").hasClass("active")) {
                        $("#features > li:nth-child(3)").addClass("active");
                    }
                } else {
                    if ($("#features > li:nth-child(3)").hasClass("active")) {
                        $("#features > li:nth-child(3)").removeClass("active");
                    }

                    if ((scrollTop > featuresForthChildScrollTop) && (scrollTop < featuresForthChildScrollBottom)) {
                        if (!$("#features > li:nth-child(4)").hasClass("active")) {
                            $("#features > li:nth-child(4)").addClass("active");
                        }
                    } else {
                        if ($("#features > li:nth-child(4)").hasClass("active")) {
                            $("#features > li:nth-child(4)").removeClass("active");
                        }
                    }
                }
            }
        }
    });
});