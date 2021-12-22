$(function() {
    $('.select').click(function() {
        $('.fd-mask').css('display', 'block')
        $(this).removeClass('has-selected')
        $(this).parent().addClass('open')
        $(this).parent().siblings().removeClass('open')
    })
    $('.select-list li').click(function() {
        var html = $(this).text()
        $(this).parent().parent().removeClass('open')
        $(this).parent().siblings().addClass('has-selected').html(html)
        $('.fd-mask').css('display', 'none')
    })
    $('.fd-mask').click(function() {
        $(this).css('display', 'none')
        $('.select').parent().removeClass('open')
    })

    // email
    $('.useremail').blur(function(){
        var email = $('.useremail').val();
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if((!email) || (!reg.test(email))){
            $('.fd-email-item').addClass('invalid');
            $('.fd-email-item').removeClass('valid');
        }else{
            $('.fd-email-item').removeClass('invalid');
            $('.fd-email-item').addClass('valid')
        }
    })
    // username
    $('.username').blur(function() {
        var username = $('.username').val()
        if (!username) {
            $('.fd-username-item').addClass('invalid')
            $('.fd-username-item').removeClass('valid')
        } else {
            $('.fd-username-item').addClass('valid')
            $('.fd-username-item').removeClass('invalid')
        }
    })
    // suggestion
    $('.areaval').blur(function(){
        var areaval = $('.areaval').val();
        if(!areaval){
            $('.fd-suggestion-item').addClass('invalid').removeClass('valid');
        }else{
            if(areaval.length < 50){
                $('.fd-suggestion-item').addClass('invalid').removeClass('valid');
            }else{
                $('.fd-suggestion-item').removeClass('invalid').addClass('valid');
            }
        }
      });

    getContect = function() {
        var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        var email = $('.useremail').val();
        var username = $('.username').val()
        var subject1 = $('.select1').text()
        var subject2 = $('.select2').text()
        var areaval = $('.areaval').val();
        var file1 = document.getElementById('file1').files[0]
        var file2 = document.getElementById('file2').files[0]
        var file3 = document.getElementById('file3').files[0]
        var code = $('.code').val()

        var errorFlag = 0
        // 邮箱验证
        if((!email) || (!reg.test(email))){
            $('.fd-email-item').addClass('invalid').removeClass('valid')
            errorFlag = 1;
        }else{
            $('.fd-email-item').removeClass('invalid').addClass('valid')
        }
        // 用户名验证
        if (!username) {
            $('.fd-username-item').addClass('invalid').removeClass('valid')
            errorFlag = 1;
        } else {
            $('.fd-username-item').addClass('valid').removeClass('invalid')
        }
        // 验证是否输入反馈问题 不少于 50 个字符
        if(!areaval){
            $('.fd-suggestion-item').addClass('invalid').removeClass('valid');
            errorFlag = 1;
        }else{
            if(areaval.length < 50){
                $('.fd-suggestion-item').addClass('invalid').removeClass('valid');
                errorFlag = 1;
            }else{
                $('.fd-suggestion-item').removeClass('invalid').addClass('valid');
            }
        }

        // 下拉菜单验证

        // 上传的文件验证

        // 验证码
        if (!code) {

        } else {

        }

        // 弹出提示框 填写成功 or 失败
        $('.fd-flag').css('display', 'block')
        if (!email && !username &&!areaval) {
           $('.fail-flag').addClass('flagModel')
        } else {
           $('.success-flag').addClass('flagModel')
        }


    }

    hiddenFlag = function() {
        $('.fd-flag').css('display', 'none')
        $('.flag').removeClass('flagModel')
    }
})