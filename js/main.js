$(function () {
    $('.slider__inner, .news__slider__inner').slick({
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        infinite: false
    });
    $('.burger').on('click', function () {
        $('.menu ul').slideToggle()
    })
});