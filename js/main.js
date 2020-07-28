$().ready(function () {
    $('#slider-wrapper').slick({
        slidesToShow: 3,
        prevArrow: '<div class="prevArrow"><img src="img/sliderarrowrever.png" alt=""></div>',
        nextArrow: '<div class="nextArrow"><img src="img/sliderarrow.png" alt=""></div>',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
})