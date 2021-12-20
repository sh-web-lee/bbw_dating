jQuery(document).ready(function($) {
    var interval;
    timeInterval();
    //自动轮播
    function timeInterval() {
        var i = 0;

        if (i == 0) {
            interval = setInterval(function() {
                moveRight();
            }, 5000);

            i = 1;
        } else {
            clearInterval(interval);
            i = 0;
        }
    }

    $('.slider ul li:first-child').prependTo('.slider ul');

    function moveLeft() {
        $('.slider ul').animate({
            left: '100%'
        }, 200, function() {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: '-100%'
        }, 1000, function() {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    $('.slider').mouseenter(function() {
        clearInterval(interval);
    });

    $('.slider').mouseleave(function() {
        timeInterval();
    });



    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            clearInterval(interval);
        }
    });


    // //mobile 左右滑动
    // window.addEventListener('touchstart', function(e) {
    //     e.preventDefault();
    //     // clearInterval(interval);
    //     startX = e.touches[0].pageX,
    //         startY = e.touches[0].pageY;
    // }, { passive: false })
    // window.addEventListener('touchmove', function(e) {
    //     e.preventDefault();
    //     moveEndX = e.touches[0].pageX,
    //         moveEndY = e.touches[0].pageY,
    //         X = moveEndX - startX,
    //         Y = moveEndY - startY;
    //     console.log(X)
    //     if (X > 0) {

    //         $('.slider ul').animate({
    //             left: '100%'
    //         }, 200);
    //     } else {
    //         $('.slider ul').animate({
    //             left: '-100%'
    //         }, 200);

    //     }
    // }, { passive: false })
    // window.addEventListener('touchend', function(e) {
    //     e.preventDefault();
    //     // timeInterval();
    // }, { passive: false })



});


//cookie 确认
$(document).ready(function() {
    if (getCookie('confirm')) {
        $(".confirm_pop").remove();
    }
    $(".confirm_pop .confirm_btn").click(function() {
        setCookie('confirm', true);
        $(".confirm_pop").css('display', 'block');
        setTimeout(() => {
            $(".confirm_pop").remove()
        }, 100);
    })
});