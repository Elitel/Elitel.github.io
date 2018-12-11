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

   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(51526484, "init", {
        id:51526484,
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });
