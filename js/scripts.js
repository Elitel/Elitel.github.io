$(document).ready(function () {
    $('#carousel').hammer().on('swipeleft', function () {
        $(this).carousel('next');
    })
    $('#carousel').hammer().on('swiperight', function () {
        $(this).carousel('prev');
    })
});
AOS.init({
    duration: 1000,
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('#hide').hide(1000);
    }
    else {
        $('#hide').show(1000);
    }
});
