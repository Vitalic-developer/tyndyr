$('.slider').slick({
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
});
$('.open-popup').click(function () {
    $('.popup-bg').fadeIn(200);
    $('html').addClass('no-scroll')
});
$('.close-popup').click(function (){
    $('.popup-bg').fadeOut(200);
})

$('.popup-bg').click(function (e) {
    if (!$(e.target).closest(".popup").length) {
        $('.popup-bg').fadeOut(600);
    }
});



$('.burger-button').on('click', function(e) {
    e.preventDefault();
    $('.burgermenu').toggleClass('burgermenu_active');
})
$('.burger-list a').click(function(e) {
    e.preventDefault();
    $('.burgermenu').toggleClass('burgermenu_active');
})



