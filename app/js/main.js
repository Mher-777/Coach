$(function () {
    
    $('.header__slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
    
    });

    $('.about-slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: '<button class="about-slider__box-arrows arrow-left"><img src="./images/arrows-left.svg" alt=""></button>',
        nextArrow: '<button class="about-slider__box-arrows arrow-right"><img src="./images/arrows-right.svg" alt=""></button>',
    });
   
    $('.book-lesson__subscribe-checkbox-wrapper label').on('click', function () {
        $(this).removeClass('active')
    });

    $('.gallery-menu__btn').on('click', function () {
        $('.gallery-menu__btn').removeClass('active');
        $(this).addClass('active');
    })
    var mixer = mixitup('.gallery__wrapper');
});