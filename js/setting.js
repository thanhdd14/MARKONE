//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    // $(".nav-menu").slideToggle();
    // e.preventDefault();
    $(".header-nav").fadeToggle();
});

//siider-home
$('.js-mv-slider').slick({
    dots: false,
    focusOnSelect: true,
    pauseOnHover:false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
});


$(function () {
    var headerHeight = $('#header').outerHeight();
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            $('body,html').stop().animate({scrollTop: position}, 1000);
        }, 100);
    }
    
    jQuery('.js-scroll').click(function(e) {
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - headerHeight}, 1500);
        return false;
        e.preventDefault();
    });
    
});