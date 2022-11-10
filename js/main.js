// -----------------------------------------------------------------------------
// WHEN DOCUMENT IS READY
// -----------------------------------------------------------------------------
$(document).ready(function(){

    // -----------------------------------------------------------------------------
    // DESKTOP NAVIGATION BAR
    // -----------------------------------------------------------------------------
    function animateDesktopNavigationBar(){
        let desktopNavigatoinBar = $('.desktop-navigation-bar');
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 1) {
                desktopNavigatoinBar.addClass('scrolled');
            } else{
                desktopNavigatoinBar.removeClass('scrolled');
            }
        });
    }
    animateDesktopNavigationBar();

    // -----------------------------------------------------------------------------
    //MOBILE NAVIGATION BAR
    // -----------------------------------------------------------------------------
    function showHideMobileNavMenu(){
        let hamburgerMenuBtn = $('.hamburger-menu');
        let mobileNavigationMenu = $('.mobile-navbar');
        let mobileNavOverlay = mobileNavigationMenu.find('.mobile-nav-overlay');
        let mobileNavCloseBtn = mobileNavigationMenu.find('.mobile-nav-btn');
        var mobileNavdropdownMenu = mobileNavigationMenu.find('li.dropdown');
        hamburgerMenuBtn.on('click', function(){
            mobileNavigationMenu.addClass('show');
        });
        mobileNavCloseBtn.on('click', function(){
            mobileNavigationMenu.removeClass('show');
        });
        mobileNavdropdownMenu.on('click', function(){
            $(this).toggleClass('show');
        });    
        mobileNavOverlay.on('click', function(){
            mobileNavigationMenu.removeClass('show');
        });
    }
    showHideMobileNavMenu();

    // -----------------------------------------------------------------------------
    // HOMEPAGE INTRODUCTION VIDEO
    // -----------------------------------------------------------------------------
    function initalizeHomepageIntroVideo(){
        const introductionVideo = new Plyr(document.getElementById('introduction-video'));
        $(document).on('opened', '.introduction-video', function(){
            introductionVideo.play();
        });
        $(document).on('closing', '.introduction-video', function(){
            introductionVideo.pause();
        });
    }
    initalizeHomepageIntroVideo();

    // -----------------------------------------------------------------------------
    // HOMEPAGE LATEST NEWS & ARTICLES SLIDER
    // -----------------------------------------------------------------------------
    function initalizeHomepageNewsSlider(){
        let homepageNewsSlider = $('.news-slider');
        homepageNewsSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
            let currentSlideCount = (currentSlide ? currentSlide : 0) + 1;
            homepageNewsSlider.find('.all-slides').html(slick.slideCount);
            homepageNewsSlider.find('.current-slide').html(currentSlideCount);
        });
        homepageNewsSlider.find('.slider-wrapper').slick({
            autoplay: true,
            autoplaySpeed: 10000,
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 0,
            infinte: true,
            pauseOnHover: true,
            draggable: false,
            fade: true,
            prevArrow: $('.news-slider .pagination-slides-number .previous'),
            nextArrow: $('.news-slider .pagination-slides-number .next'),
        }).slickAnimation();
    }
    initalizeHomepageNewsSlider();

    // -----------------------------------------------------------------------------
    // INITALIZE WOW
    // -----------------------------------------------------------------------------
    new WOW().init();

    // -----------------------------------------------------------------------------
    // SCROLL TO TOP BUTTON
    // -----------------------------------------------------------------------------
    function initalizeScrollToTopButton(){
        let scrollToTop = $('.scroll-to-top');
        $(window).scroll(function() {
            if ($(window).scrollTop() >= 700) {
                scrollToTop.addClass("show");
            } else{
                scrollToTop.removeClass("show");
            }
        });
        scrollToTop.on('click', function(){
            $('body, html').animate({
                scrollTop: 0
            }, 1000);
        });
    }
    initalizeScrollToTopButton();

});