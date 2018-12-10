$(document).ready(function () {
    $('#carousel').hammer().on('swipeleft', function () {
        $(this).carousel('next');
    })
    $('#carousel').hammer().on('swiperight', function () {
        $(this).carousel('prev');
    })
});
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            $(document).ready(function() {
                $("#carousel").swiperight(function() {
                   $(this).carousel('prev');
                 });
                $("#myCarousel").swipeleft(function() {
                   $(this).carousel('next');
                });
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