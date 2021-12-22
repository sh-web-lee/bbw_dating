$(function() {
    $('.select').click(function() {
        $('.fd-mask').css('display', 'block')
        $(this).parent().addClass('open')
        $(this).parent().siblings().removeClass('open')
    })
    $('.select-list li').click(function() {
        console.log($(this).text())
    })
    $('.fd-mask').click(function() {
        $(this).css('display', 'none')
        $('.select').parent().removeClass('open')
    })
})