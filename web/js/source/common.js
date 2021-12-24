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
    $(window).bind('scroll', function() {
        console.log('111')
        if ($(window).scrollTop() > 700) {
            $(_dom).addClass('active-goback')
        } else {
            $(_dom).removeClass('active-goback')
        }
    });
    $(_dom).bind("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });
}


$(function() {
    // 进入页面banner 添加 动画类名
    setTimeout(() => {
        $('.custom-sc').addClass('on')
    }, 300);

    // ga
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-214741877-1', 'auto');
    ga('send', 'pageview');
    
    !function (w, d, t) {
        w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
        ttq.load('C4DLGQHU9OSI64ED01PG');
        ttq.page();
    }(window, document, 'ttq');
})
// ga

getGa = function(str1, str2, str3) {
    var str1 = str1 || '';
    var str2 = str2 || '';
    var str3 = str3 || '';
    // var device = <?= json_encode($deviceType) ?>;
    if (str1 && str2 && str3) {
      if (str3.indexOf('#') !== -1) {
        str3 = str3.replace('#', device);
      }
      ga("send", "event", str1, str2, str3)
    }
    // if (device == 'pc') {
    //   let token = localStorage.getItem('token');
    //   // if (token == null) {
    //   //   window.location.href = '/login';
    //   // } else {
    //   //   window.location.href = '/user';
    //   // }
    //   window.location.href = '<?php echo $exeUrl;?>';
    // } else if (device == 'ios') {
    //   var iosUrl = '<?= $downloadData['iosUrl'] ?>';
    //   window.location.href = iosUrl;
    // } else if (device == 'app') {
    //   if (country_code == 'BR') {
    //     var androidUrl = 'https://www.easygetinsta.com/downloadcenter';
    //   } else {
    //     var androidUrl = '<?= $downloadData['androidUrl'] ?>';
    //   }
    //   window.location.href = androidUrl;
    // }
  }