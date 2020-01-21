$(function () {
    
    $('.header__slider').slick({
        arrows: false,
        fade: true,
        autoplay: true,
    
    });
    $('.video__review-slider').slick({
        arrows: true,
        infinite: false,
        prevArrow: '<button class="video__review-arrows arrow-left"><img src="./images/arrows-left-black.svg" alt=""></button>',
        nextArrow: '<button class="video__review-arrows arrow-right"><img src="./images/arrows-right-black.svg" alt=""></button>',
        
    });
    $('.calendar__inner-slider').slick({
        arrows: true,
        infinite: true,
        prevArrow: '<button class="calendar-arrows arrow-left"><img src="./images/arrows-left-white.svg" alt=""></button>',
        nextArrow: '<button class="calendar-arrows arrow-right"><img src="./images/arrows-right-white.svg" alt=""></button>',
        appendArrows: '.calendar-item__pagination',
        rows: 0,
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
    });

    $('.faq-question__item').on('click', function () {
        $(this).toggleClass('active')
    })
    var mixer = mixitup('.gallery__wrapper');
});