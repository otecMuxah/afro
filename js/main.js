$(window).load(function() {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5
    });
    $('.form__select').selectmenu();
});
