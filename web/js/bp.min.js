$(function() {
    goBack('.go_back');
    var _banner = $('.banner').height();
    var _section1 = $('.section1').height();
    var _section2 = $('.section2').height();
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
        if (_top >= _banner + _section1 + _section2 - 300) {
            $('.section3>.container').addClass('animate');
        }
        if (_top >= _banner + _section1 + _section2 + _sec3_con) {
            $('.sec3_info').addClass('animate');
        }
    });
});


$(function() {
    var _len = $('.sec1_ulul li').length;
    for (var i = 0; i < _len; i++) {
        $('.ulul_circul').append($('<div></div>'));
    }
})