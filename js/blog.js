$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 200) {
        $(".top").addClass("top-fixed");
        $(".nav-responsive").addClass("nav-fixed");
    } else {
        $(".nav-responsive").removeClass("nav-fixed");
        $(".top").removeClass("top-fixed");
    }
});