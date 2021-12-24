$(function() {
    //pc点击
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

    //mob 点击
    $('.ol_ol li').click(function() {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on')
        } else {
            $(this).addClass('on').siblings().removeClass('on')
        }
    });
    $('.sec5_tab_ulul>li').click(function() {

        $(this).addClass('sec5_show').siblings().removeClass('sec5_show');
        var _index = $(this).index();

    })
})



$(function() {
    goBack('.go_back');
    var _banner = $('.banner').height();
    var _section1 = $('.section1').height();

    var _section2 = $('.section2').height();
    var _li1 = $('.li1').height();
    var _li2 = $('.li2').height();
    var _li3 = $('.li3').height();
    var _li4 = $('.li4').height();
    var _li5 = $('.li5').height();
    var _section3 = $('.section3').height();
    var _section4 = $('.section4').height();
    var _section5 = $('.section6').height();
    $(document).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top >= 400) {
            $('.section1').addClass('animate')
        }
        // if (_top >= _banner + _section1 - 300) {
        //     $('.section2').addClass('animate')
        // }
        if (_top >= _banner + _section1 - 300) {
            $('.li1').addClass('animate');
            $('.sec2_h').addClass('animate');
        }
        if (_top >= _banner + _section1 + _li1) {
            $('.li2').addClass('animate')
        }
        if (_top >= _banner + _section1 + _li1 + _li2) {
            $('.li3').addClass('animate')
        }
        if (_top >= _banner + _section1 + _li1 + _li2 + _li3) {
            $('.li4').addClass('animate')
        }
        if (_top >= _banner + _section1 + _li1 + _li2 + _li3 + _li4) {
            $('.li5').addClass('animate')
        }
        if (_top >= _banner + _section1 + _li1 + _li2 + _li3 + _li4 + _li5) {
            $('.li6').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 - 300) {
            $('.section3').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 + _section3) {
            $('.section4').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 + _section3 + _section4) {
            $('.section5').addClass('animate')
        }
        if (_top >= _banner + _section1 + _section2 + _section3 + _section4 + _section5) {
            $('.section6').addClass('animate')
        }
    });
});



$(function() {
    //切换轮播
    $('.sec1_ulul_mob').find('li').eq(0).fadeIn().siblings().fadeOut();
    var _len = $('.sec1_ulul_mob li').length;

    for (var i = 0; i < _len; i++) {
        $('.ulul_circul').append($('<div></div>'));
    };
    $('.ulul_circul').find('div').eq(0).addClass('cir_color');

    $('.ulul_circul div').click(function() {
        $(this).addClass('cir_color').siblings().removeClass('cir_color');
        var _index = $(this).index();
        $('.sec1_ulul_mob').find('li').eq(_index).fadeIn().siblings().fadeOut();
    })

})