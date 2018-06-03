
$(function(){


    //header轮播图
    (function(){
        var $bg = $('#h-bg').find("p"),
            $tab = $("#h-tab .btn"),
            length = $bg.length,
            index = 0,
            timer = null;

        $tab.click(function(){
            if(  $(this).index() === index  ){
                return;
            }
           /* $bg.eq(index).fadeOut();
            $tab.eq(index).removeClass("active");
            index = $(this).index();
            $bg.eq(index).fadeIn();
            $tab.eq(index).addClass("active");*/
            clearInterval(timer);
            auto();

            change(function(){
                index = $(this).index();
            }.bind(this));
        });

        auto();

        function auto(){
            timer = setInterval( function(){
                change(function(){
                    index ++;
                    index %= length;
                });
            } , 5000);
        }

        function change(fn){
            fn();
            $bg.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
            $tab.eq(index).addClass("active").siblings().removeClass("active");
        }

    })();

});




