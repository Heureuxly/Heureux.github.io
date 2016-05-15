//电脑版本js
//屏幕加载事件
$(function(){
	var i="";
	i=document.body.clientWidth;
	if (i>=768) {
		//banner图片轮播
		$(".wrapperpic1").attr("src","images/big/wrapper01.jpg");
        $(".wrapperpic2").attr("src","images/big/wrapper02.jpg");
        $(".wrapperpic3").attr("src","images/big/wrapper03.jpg");
        $(".wrapperpic4").attr("src","images/big/wrapper04.jpg");
        $(".wrapperpic5").attr("src","images/big/wrapper05.jpg");
       
        //footer
        $(".footerbottom p").html("Copyright© 2016&nbsp&nbsp&nbsp雅马哈乐器音响（中国）投资有限公司&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp<a href=''>沪ICP备05040406号</a>");



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
     

    	//if ($("#login_wrapper").hasClass("login_wrapper_none")) {
        $(".loginon").click(function(){
        // $(".login_wrapper").removeClass("login_wrapper_none");
        $(".login_wrapper").fadeIn(500);
        })

       
     	//}
     	$(".login_close").click(function(){
        $(".login_wrapper").fadeOut(500);
     	})





     	//产品展示
     	/*$(".btn_right").click(function(){
        var clone_1=$(".recommend:first").clone();
        if (!$(".recommendbig").is(":animated")) {
       		$(".recommendbig").animate({left:"-100%"},1000,function(){
            clone_1.insertAfter($(".recommend:last"));
            $(".recommend:first").remove();
            $(".recommendbig").attr("style","left:0");

        	});
      	}
    	})
    	$(".btn_left").click(function(){
        var clone_1=$(".recommend:last").clone();
        if (!$(".recommendbig").is(":animated")) {
        	clone_1.insertBefore($(".recommend:first"));
        	$(".recommendbig").attr("style","left:-100%");
        	$(".recommendbig").animate({left:"0"},1000,function(){
        		$(".recommend:last").remove();
        	});
   		}
    	})*/
        
        var mySwiper = new Swiper('.recommendbig', {
            loop : true,
            nextButton: '.btn_right',
            prevButton: '.btn_left',
        })




    	//按钮移动到指定位置
		$("#anchor").click(function(){
        	$.scrollTo('#other',1000); 
   		})



	
































	}
})





//随浏览器应用  复制！copy