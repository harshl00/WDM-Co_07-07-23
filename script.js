$(document).ready(function(){
    $('.gallery-container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });

    $('.prev-btn').click(function() {
        $('.gallery-container').slick('slickPrev');
    });

    $('.next-btn').click(function() {
        $('.gallery-container').slick('slickNext');
    });
});
