$(window).load(function() {
    $('.login__username').on('click', function () {
        $(this).toggleClass('active');
    })



    $('.carousel').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1185,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.form__select').selectmenu();

    $('.hamburger').on('click', function () {
        $('.navigation').toggleClass('active');
        $(this).toggleClass('active');
    });

    $('.candidate-card__more').on('click',function () {
        // console.log($(this).text());
        // if ($(this).text()) {
        //     console.log($(this).text());
        //     $(this).text('Less');
        // } else if ($(this).text() === 'Less') {
        //     $(this).text('More');
        // }
        $(this).toggleClass('candidate-card__more--less');
        $(this).parents('.candidate-card__wrapper').siblings('.candidate-card__wrapper--more').toggleClass('active');
    });

    $('.checkbox__text').on('click',function () {
        $(this).find('.candidate-card__verified-popup').toggleClass('active');
    });

    $('.candidate-card__flag-svg').on('click',function () {
        $(this).siblings('.candidate-card__verified-popup').toggleClass('active');
    });

    $('.button--trigger').on('click', function () {
        $(this).find('.balloon').toggleClass('active');
    });

    $('.candidate-card__close-button-holder').on('click', function () {
        $(this).find('.candidate-card__verified-popup').toggleClass('active');
    });

});
