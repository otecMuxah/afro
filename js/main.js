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
        // var link = '#' + this.dataset.card;
        // console.log(link);
        // $(link).addClass('active');
        $(this).addClass('hidden');
        $(this).parents('.candidate-card__wrapper').siblings('.candidate-card__wrapper--more').addClass('active');
    });

    $('.candidate-card__more--less').on('click', function () {
        $(this).parents('.candidate-card__wrapper--more').siblings('.candidate-card__wrapper').find('.candidate-card__more').removeClass('hidden');
        $(this).closest('.candidate-card__wrapper--more').removeClass('active');
    })
});
