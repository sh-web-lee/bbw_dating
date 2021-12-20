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
})