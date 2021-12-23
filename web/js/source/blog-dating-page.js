$(function() {
    $(window).on('scroll', function() {
        $(this).scrollTop() > 886 ? 
        $('.dp-float-ball').addClass('active-floatball') : 
        $('.dp-float-ball').removeClass('active-floatball')
    })

    $('.dp-float-ball').on('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
})