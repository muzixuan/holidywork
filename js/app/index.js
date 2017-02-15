/**
 * Created by Administrator on 2017/2/8 0008.
 */
$(function(){
    $("#header").load("header.html"),
        $("#footer").load("footer.html")

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        speed:300,
        paginationClickable:true,
        pagination: '.swiper-pagination',
    });
})