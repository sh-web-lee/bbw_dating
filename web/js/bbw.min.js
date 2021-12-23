$(function() {
    $('.ul_ul li').click(function() {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
        } else {
            $(this).addClass('on').siblings().removeClass('on')
        }

    });

    $('.sec5_ol li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var _index = $(this).index();
        $('.sec5_div').find('ul').eq(_index).addClass('sec5_ul').siblings().removeClass('sec5_ul');
    });
})



$(function() {
    goBack('.go_back');
    var _banner = $('.banner').height();
    var _section1 = $('.section1').height();
    var _section2 = $('.section2').height();
    var _section3 = $('.section3').height();
    var _section4 = $('.section4').height();
    var _section5 = $('.section6').height();
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
            $('.section4').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 + _section3 + _section4 - 300) {
            $('.section5').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 + _section3 + _section4 + _section5 - 300) {
            $('.section6').addClass('animate')
        }
    });
})