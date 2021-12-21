$(function() {
    goBack('.go_back');
    var _banner = $('.banner').height();
    var _section1 = $('.section1').height();
    var _section2 = $('.section2').height();
    var _section3 = $('.section3').height();
    $(document).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top >= 400) {
            $('.section1').addClass('animate')
        }
        if (_top >= _banner + _section1 - 300) {
            $('.section2').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 - 300) {
            $('.section3').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 + _section3 - 300) {
            $('.section4 .container').addClass('animate')
        }
    });
});

$(function() {
    Swpier.click();
});

//mobile两个轮播图
var Swpier = {
    data: {
        _active: true, //轮播图节流
        _active2: true
    },
    method: {
        getData(_dom) { //获取设置ul宽高
            var slideCount2 = $(`${_dom} ul li`).length;
            var slideWidth2 = $(`${_dom} ul li`).width();
            var sliderUlWidth2 = slideCount2 * slideWidth2;
            $(`${_dom} ul `).css({
                width: sliderUlWidth2,
                marginLeft: -slideWidth2
            });
            $(`${_dom} ul li:last-child`).prependTo(`${_dom} ul`);
        }, //左移动
        moveLeft(_dom) {
            $(`${_dom} ul `).animate({
                left: '100%'
            }, 1000, function() {
                $(`${_dom} ul li:last-child`).prependTo(`${_dom} ul`);
                $(`${_dom} ul `).css('left', '');
            });
        }, //右移动
        moveRight(_dom) {
            $(`${_dom} ul `).animate({
                left: '-100%'
            }, 1000, function() {
                $(`${_dom} ul li:first-child`).appendTo(`${_dom} ul`);
                $(`${_dom} ul `).css('left', '');
            });
        }
    },
    click() {
        Swpier.method.getData('.ulul_slider');
        Swpier.method.getData('.ulul_slider2');
        $('.ulul_right').click(function() {
            if (Swpier.data._active) {
                Swpier.data._active = false;
                Swpier.method.moveRight('.ulul_slider');
                setTimeout(function() { Swpier.data._active = true; }, 1000)
            }
        });
        $('.ulul_left').click(function() {
            if (Swpier.data._active) {
                Swpier.data._active = false;
                Swpier.method.moveLeft('.ulul_slider');
                setTimeout(function() { Swpier.data._active = true; }, 1000)
            }
        });
        $('.ulul_right2').click(function() {
            if (Swpier.data._active2) {
                Swpier.data._active2 = false;
                Swpier.method.moveRight('.ulul_slider2');
                setTimeout(function() { Swpier.data._active2 = true; }, 1000)
            }
        });
        $('.ulul_left2').click(function() {
            if (Swpier.data._active2) {
                Swpier.data._active2 = false;
                Swpier.method.moveLeft('.ulul_slider2');
                setTimeout(function() { Swpier.data._active2 = true; }, 1000)
            }
        });

    }
}