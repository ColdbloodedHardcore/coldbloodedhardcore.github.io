$(document).ready(function () {


    //animation
    var wow = new WOW;
    wow.init();
    
     if ($(window).width() <= 539) {
        $('#about-slide, #about-slide').removeClass('slideInDown').addClass('slideInLeft');
        $('#about-slide-right').removeClass('slideInDown').addClass('flipInX');
        $('#design-down').removeClass('slideInRight').addClass('flash');
        $('#team-left').removeClass('slideInDown').addClass('slideInLeft');
        $('#team-down').removeClass('slideInDown').addClass('slideInUp');
    } else {
        $('#about-slide, #about-slide, #about-slide').removeClass('slideInLeft').addClass('slideInDown');
        $('#design-down').removeClass('flash').addClass('slideInRight');
        $('#team-left').removeClass('slideInLeft').addClass('slideInDown');
        $('#team-down').removeClass('slideInUp').addClass('slideInDown');
    }    

    // home-slider
    $('.home-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '.home-left-arrow',
        prevArrow: '.home-right-arrow'
    });

    // reviews-slider
    $('.reviews-slider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '.rewiews-left-arrow',
        prevArrow: '.rewiews-right-arrow'
    });

    // clients-slider
    if ($(window).width() <= 540) {
        $('.clients-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500
        });
    } else {
        $('.clients-slider').slick({
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrow: false
        });
    }

    //menu
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $(".header").css("background-color", "#95e1d3");
        } else {
            $(".header").css("background-color", "transparent");
        }
    });

    //for counter

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //Mix It Up
    // $(".grid-container").mixItUp();

    //Parallax 
    $('.parallax-people').parallax({
        imageSrc: './images/people_bg.jpg'
    });



});
