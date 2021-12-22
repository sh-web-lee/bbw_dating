function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return "";
}

//回到顶部

function goBack(_dom) {
    $(_dom).hide();
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() <= 700) {
            $(_dom).slideUp();
        } else {
            $(_dom).slideDown();
        }
    });
    $(_dom).bind("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 100);
    });
}

$(function() {
    setTimeout(() => {
        $('.custom-sc').addClass('on')
    }, 300);
})