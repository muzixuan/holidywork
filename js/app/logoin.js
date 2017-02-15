/**
 * Created by Administrator on 2017/1/21 0021.
 */
$(function(){
    /*注册和登录的选项卡*/
    $(".logoin li").hover(function(){
        $(".logoin .logoin01").hide();
        $(".logoin .logoin01").eq($(this).index()).show();
    })
    /*登录验证*/
    $("#signupForm").validate({
        rules:{
            username:"required",
            yzm:"required"
        },
        messages:{
            username:"账号不能为空",
            yzm:"请输入验证码"
        }
    });
    $("#signupForm1").validate({
        rules:{
            username:"required",
            yzm:"required"
        },
        messages:{
            username:"账号不能为空",
            yzm:"请输入验证码"
        }
    });
    $(".tach").click(function(){
        $(".tach").css({
            top:"106px",
        });
    })
})