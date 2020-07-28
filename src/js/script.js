$(document).ready(function () {
    $('.carusel__inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        prewArrow: '<button type="button" class="slick-prev"><img src="../icons/arrows/chevron-left.png"></button>'
    });
});