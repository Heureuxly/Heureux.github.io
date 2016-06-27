$(function(){
    curIndex=0;
    var autoChange=setInterval(function(){
        if (curIndex<$(".poster img:not(:last)").length-1) {
            curIndex++;
        }
        else{
            curIndex=0;
        }

        //调用变换处理函数
        changeTo(curIndex);
    },3000);


  
    function changeTo(num){
        $(".poster").find("img:not(:last)").removeClass("visible").eq(num).addClass("visible");
       
    }



    /*指定图片文字颜色变色
    if (num=3) {
    $(".topword p,.topword a,.topword i").css("color","black");
   };*/ 



   //登录login
        $(".p4").attr("style","display:none");
        $("#login-button").click(function(event){
         event.preventDefault();
     
        $('form').fadeOut(500);
        $('.login_wrapper').addClass('form-success');
        $('#welcome').html("欢迎");
        $(".login_wrapper").fadeOut(1500);
    
        $(".p3").attr("style","display:none");
        $(".p4").attr("style","display:block");
     
        });
     

        $(".loginon").click(function(){
        $(".login_wrapper").fadeIn(500);
        })

       
        $(".login_close").click(function(){
        $(".login_wrapper").fadeOut(500);
        })
})