$(document).ready(function () {
    $('#carousel').hammer().on('swipeleft', function () {
        $(this).carousel('next');
    })
    $('#carousel').hammer().on('swiperight', function () {
        $(this).carousel('prev');
    })
});

$('.carousel').carousel({
    interval: 2500,
    pause: "hover",
    keyboard: true,
})

