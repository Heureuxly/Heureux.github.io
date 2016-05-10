$(function(){
	$(".m1").click(function(){
	$(".dv").toggleClass("dvchange");


})
	$(".m2").click(function(){
	$(".dv").toggleClass("dvchange");
})
})









//根据浏览器大小切换图片
$(window).resize(function(){
    var i="";
    i=document.body.clientWidth;

    if(i>=768){
        $(".wrapperpic1").attr("src","images/big/wrapper01.jpg");
        $(".wrapperpic2").attr("src","images/big/wrapper02.jpg");
        $(".wrapperpic3").attr("src","images/big/wrapper03.jpg");
        $(".wrapperpic4").attr("src","images/big/wrapper04.jpg");
        $(".wrapperpic5").attr("src","images/big/wrapper05.jpg");

        $(".musicalpic_1").attr("src","images/big/musical01.jpg");
        $(".musicalpic_2").attr("src","images/big/musical02.jpg");
        $(".musicalpic_3").attr("src","images/big/musical03.jpg");
        $(".footerbottom p").html("Copyright© 2016&nbsp&nbsp&nbsp雅马哈乐器音响（中国）投资有限公司&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp<a href=''>沪ICP备05040406号</a>");
    }
    else{
        $(".bannerword").addClass("mbnone");
         $(".wrapperpic1").attr("src","images/small/wrapper01.jpg");
        $(".wrapperpic2").attr("src","images/small/wrapper02.jpg");
        $(".wrapperpic3").attr("src","images/small/wrapper03.jpg");
        $(".wrapperpic4").attr("src","images/small/wrapper04.jpg");
        $(".wrapperpic5").attr("src","images/small/wrapper05.jpg");

        $(".musicalpic_1").attr("src","images/small/musical01.jpg");
        $(".musicalpic_2").attr("src","images/small/musical02.jpg");
        $(".musicalpic_3").attr("src","images/small/musical03.jpg");
        $(".footerbottom p").html("Copyright© 2016<br>雅马哈乐器音响（中国）投资有限公司<br>版权所有<a href=''>沪ICP备05040406号</a>");
    }
})
$(function(){
    var i="";
    i=document.body.clientWidth;

    if(i>=768){
        $(".wrapperpic1").attr("src","images/big/wrapper01.jpg");
        $(".wrapperpic2").attr("src","images/big/wrapper02.jpg");
        $(".wrapperpic3").attr("src","images/big/wrapper03.jpg");
        $(".wrapperpic4").attr("src","images/big/wrapper04.jpg");
        $(".wrapperpic5").attr("src","images/big/wrapper05.jpg");

        $(".musicalpic_1").attr("src","images/big/musical01.jpg");
        $(".musicalpic_2").attr("src","images/big/musical02.jpg");
        $(".musicalpic_3").attr("src","images/big/musical03.jpg");
        $(".footerbottom p").html("Copyright© 2016&nbsp&nbsp&nbsp雅马哈乐器音响（中国）投资有限公司&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp<a href=''>沪ICP备05040406号</a>");
    }
    else{
        $(".bannerword").addClass("mbnone")
    }
})





/*鼠标悬停图片显示文字
//Left picture;
$(window).resize(function(){
    var i="";
    i=document.body.clientWidth;

    if (i<=768)
    {
         $(".recommendword").css("display","none")
    }
    else
    {
         $(".recommendword").css("display","block")
    }


})

$(function(){
    var i="";
    i=document.body.clientWidth;
    if (i<=768)
    {
         $(".recommendword").css("display","none")
    }
    else
    {
         $(".recommendword").css("display","block")
    }

$(".recommendimg,.recommendword").mouseout(function(){
     $(".recommendimg").removeClass("recommendfilter");

     var i="";
    i=document.body.clientWidth;
    if (i<=768) {
         $(".recommendword").css("display","none"); 
     }
     else
     {
        $(".recommendword").css("display","block")
     }

});
$(".recommendimg,.recommendword").mouseover(function(){
     $(".recommendword").css("display","block");
     

     var i="";
     i=document.body.clientWidth;
     if (i<=768) {
        $(".recommendimg").addClass("recommendfilter");
     };

});

})


//Right picture;

$(window).resize(function(){
    var i="";
    i=document.body.clientWidth;

    if (i<=768)
    {
         $(".recommendwordR").css("display","none")
    }
    else
    {
         $(".recommendwordR").css("display","block")
    }


})
$(function(){
    var i="";
    i=document.body.clientWidth;
    if (i<=768)
    {
         $(".recommendwordR").css("display","none")
    }
    else
    {
         $(".recommendwordR").css("display","block")
    }

$(".recommendimgR,.recommendwordR").mouseout(function(){
     $(".recommendimgR").removeClass("recommendfilter");

     var i="";
    i=document.body.clientWidth;
    if (i<=768) {
         $(".recommendwordR").css("display","none"); 
     }
     else
     {
        $(".recommendwordR").css("display","block")
     }

});
$(".recommendimgR,.recommendwordR").mouseover(function(){
     $(".recommendwordR").css("display","block");
     

     var i="";
     i=document.body.clientWidth;
     if (i<=768) {
        $(".recommendimgR").addClass("recommendfilter");
     };

});

})

*/



//登录login
$(function(){
 $(".p4").attr("style","display:none");
     $("#login-button").click(function(event){
         event.preventDefault();
     
     $('form').fadeOut(500);
     $('.login_wrapper').addClass('form-success');
     $('#welcome').html("欢迎");
      $(".login_wrapper").fadeOut(1500);
      
      //$(".login_wrapper").attr("style","display:none");
      //$(".login_wrapper").addClass("login_wrapper_none");


    
        $(".p3").attr("style","display:none");
        $(".p4").attr("style","display:block");
     
});
     

    //if ($("#login_wrapper").hasClass("login_wrapper_none")) {
        $(".loginon").click(function(){
           // $(".login_wrapper").removeClass("login_wrapper_none");
           $(".login_wrapper").fadeIn(500);
        })

       
     //}


     $(".login_close").click(function(){
       
         $(".login_wrapper").fadeOut(500);
     })




})

/*$(function login(){
    $(".login_wrapper").removeClass("login_wrapper_none");
})*/

$(function(){
    $(".btn_right").click(function(){
        //alert("aaaaa");
        $(".recommend").animate({left:"-100%"});
    });
    $(".btn_left").click(function(){
        $(".recommend").animate({left:"0"},"slow");
    });


})








//图片轮播
$(function(){
    curIndex=0;
    var autoChange=setInterval(function(){
        if (curIndex<$(".poster img").length-1) {
            curIndex++;
        }
        else{
            curIndex=0;
        }

        //调用变换处理函数
        changeTo(curIndex);
    },3000);


  
    function changeTo(num){
        $(".poster").find("img").removeClass("visible").eq(num).addClass("visible");
       
    }



    /*指定图片文字颜色变色
    if (num=3) {
    $(".topword p,.topword a,.topword i").css("color","black");
   };*/ 
})




