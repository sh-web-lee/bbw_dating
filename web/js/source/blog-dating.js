$(function() {
    function BlogAll() {
        this.init()
    }
    BlogAll.prototype = {
        _index: 0,  //  轮播索引
        timer: null,    //  
        interval: 4000,     //  轮播定时切换时间 s
        next_switch: null, //   切换按钮
        prev_switch: null,
        screen_width: false,    //  屏幕宽度
        move_distance: 0,   //  轮播 平移距离
        tags: false, //     分类标签


        init:function() {
            this.initElement()
            this.cardTimer()
            this.bindSwiperChange()
            this.bindTagChange()
            this.screen_width < 768 ? this.move_distance = this.screen_width - 10 : this.move_distance = 1200
        },
        initElement: function() {
            this.screen_width = document.body.clientWidth || document.documentElement.clientWidth
            this.prev_switch = $('.prev-btn')
            this.next_switch = $('.next-btn')
            this.tags = $('.bd_navs a')
        },
        // 切换至下一张轮播图
        nextCard: function(dis) {
            $('.bd_carousel ul').stop(true, true).animate({ marginLeft: -dis }, 'slow', function() {
                $('.bd_carousel ul').css('marginLeft', '0')
                $('.bd_carousel ul').find('li:first').appendTo($('.bd_carousel ul'))
            })
        },
        // 切换至上一张轮播图
        prevCard: function(dis) {
            $('.bd_carousel ul').find('li:last').prependTo($('.bd_carousel ul'));
            $('.bd_carousel ul').css('marginLeft', -dis);
            $('.bd_carousel ul').stop(true, true).animate({marginLeft: 0}, '200');
        },
        // 轮播图索引切换
        nextPagination: function(_index) {
            $('.paginations').children().removeClass('active')
            $('.paginations').children().eq(_index).addClass('active')
        },
        prevPagination: function(_index) {
            $('.paginations').children().removeClass('active')
            $('.paginations').children().eq(_index).addClass('active')
        },
        cardTimer: function() {
            var context = this
            timer =  setInterval(() => { 
                context.nextCard(context.move_distance)
                context._index ++
                // 返回第一个分页按钮
                context._index > 3 ? context._index = 0 : context._index
                context.nextPagination(context._index)
            }, context.interval);
        },
        // 点击切换事件
        bindSwiperChange: function() {
            var context = this
            this.next_switch.add(this.prev_switch).click(function() {
                console.log(context.move_distance)
                if ($(this).is('.next-btn')) {
                    context._index ++
                    // 返回第一个分页按钮
                    context._index > 3 ? context._index = 0 : context._index
                    context.nextPagination(context._index)
                    context.nextCard(context.move_distance)
                    window.clearInterval(timer)
                    window.clearTimeout(context.cardTimer(), context.interval)
                } else {
                    context._index --
                    // 返回最后一个分页按钮
                    context._index < 0 ? context._index = 3 : context._index
                    context.prevPagination(context._index)
                    context.prevCard(context.move_distance)
                    window.clearInterval(timer)
                    window.clearTimeout(context.cardTimer(), context.interval)
                }
            })
        },
        // 文章分类标签点击切换效果
        bindTagChange: function() {
            this.tags.each(function() {
                $(this).click(function() {
                    $(this).addClass('active-tag')
                    $(this).siblings().removeClass('active-tag')
                })
            })
        }
    }
    new BlogAll()
})