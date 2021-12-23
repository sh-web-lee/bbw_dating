$(function() {
    goBack('.go_back');
    var _banner = $('.banner').height();
    var _section1 = $('.section1').height();
    var _section2 = $('.section2').height();
    var _sec2_get = $('.sec2_get').height();
    var _sec3_con = $('.sec3_con').height();

    $(document).scroll(function() {
        var _top = $(window).scrollTop();
        if (_top >= 400) {
            $('.section1').addClass('animate');
            $('.sec1_info').addClass('sec1_info_on');
        }
        if (_top >= _banner + _section1 - 300) {
            $('.section2').addClass('animate');

        }
        if (_top >= _banner + _section1 + _section2 - 400) {
            $('.sec2_get').addClass('animate');
        }
        if (_top >= _banner + _section1 + _section2 + _sec2_get - 300) {
            $('.section3>.container').addClass('animate');
        }
        if (_top >= _banner + _section1 + _section2 + _sec2_get + _sec3_con) {
            $('.sec3_info').addClass('animate');
        }
    });

    //向下箭头
    $('.arrow_down').click(function() {
        $('.sec2_div_slider').show();
        $('.sec2_arrow').hide();
    })
});


$(function() {
    //切换轮播
    $('.sec1_ulul_mob').find('li').eq(0).fadeIn().siblings().fadeOut();
    var _len = $('.sec1_ulul li').length;

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