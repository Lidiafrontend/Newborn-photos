$(document).ready(function(){

    $('.gallery').bxSlider({
        pager: false,
        auto:  true,
        controls: false,
        pause: 2500,
        autoHover: true,
        slideMargin: 10
    });

    $('.reviews').bxSlider({
        controls: false,
        slideMargin: 10,
        nextText: 'next', 
        prevText: 'prev' 
    });
  
});