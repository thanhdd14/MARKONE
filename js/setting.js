//menu header
$('.js-mobile').on('click', function(){
    $(this).toggleClass("js-mobile--close");
    $("html").toggleClass("js-locked");
    $(".header-nav").slideToggle();
});

$(document).ready(function() {
    if($(window).width()<834){
        $('.header-nav__menu-sub').on('click', function(e){
            e.preventDefault();
            $(this).toggleClass("active");
            $(this).next("ul").slideToggle();
        });
    }
    else{
    }
});


$('.popup-note__close').on('click', function(){
    $(".popup-note").addClass("hiiden");
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $("#header").addClass("js-fixed");
    }
    else {
        $("#header").removeClass("js-fixed");
    }
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
            $('body,html').stop().animate({scrollTop: position}, 700);
        }, 100);
    }
    
    jQuery('.js-scroll').click(function(e) {
        jQuery('html,body').animate({ scrollTop: jQuery(this.hash).offset().top - headerHeight}, 700);
        return false;
        e.preventDefault();
    });
    
});