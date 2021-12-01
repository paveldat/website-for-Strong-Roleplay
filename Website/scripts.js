$(function() {

    // Fancybox
    $('.fancybox').fancybox({
        padding: 0
    });

    // Mobile Menu
    $('.mobile-menu-btn').click(function(){
        $('#mobile-menu').addClass('open');
    });

    $('#mobile-menu .close').click(function(){
        $('#mobile-menu').removeClass('open');
        return false;
    });

    // Select
    $('select').selectmenu();

    // News
    $('.news-carousel').owlCarousel({
        nav: true,
        dots: false,
        responsive:{
            320: {
                items: 1,
            },
            480: {
                margin: 24,
                items: 2
            },
            767: {
                margin: 24,
                items: 3
            },
            959: {
                margin: 24,
                items: 4
            },
            1078: {
                margin: 32,
                items: 4
            }
        }
    });

    // Animations
    $(window).scroll(function(){
        $('.animated').each(function () {
            var imagePos = $(this).offset().top;
            var imageHght = $(this).outerHeight();

            var topOfWindow = $(window).scrollTop() + 40;
            var heightOfWindow = $(window).height();

            var animName = $(this).data('animate');

            if (imagePos < topOfWindow + heightOfWindow && imagePos + imageHght > topOfWindow) {
                $(this).css('visibility', 'visible').addClass(animName);
            }
        });
    });

    $('.animated').each(function () {
        var imagePos = $(this).offset().top;
        var imageHght = $(this).outerHeight();

        var topOfWindow = $(window).scrollTop() + 40;
        var heightOfWindow = $(window).height();

        var animName = $(this).data('animate');

        if (imagePos < topOfWindow + heightOfWindow && imagePos + imageHght > topOfWindow) {
            $(this).css('visibility', 'visible').addClass(animName);
        } else if (imagePos + imageHght < topOfWindow || imagePos > topOfWindow + heightOfWindow) {
            $(this).css('visibility', 'hidden').removeClass(animName);
        }
    });

    // Anchors
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');

        $('body').animate({scrollTop: $(el).offset().top}, 1000);

        return false;
    });

    // Video BG
    $('#slideshow .video-bg').YTPlayer({
        fitToBackground: false,
        videoId: 'AyWUk8T4AI8'
    });
    
    $('#video-bg').YTPlayer({
        fitToBackground: true,
        videoId: 'AyWUk8T4AI8'
    });

});