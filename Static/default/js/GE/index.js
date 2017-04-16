$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        slidePage:2,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });
})
