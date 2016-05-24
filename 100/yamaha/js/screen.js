//手机版本js
//屏幕加载事件
$(function(){
	var i="";
	i=document.body.clientWidth;
	if (i<768) {

		//导航显示隐藏
		$(".m1,.m2").click(function(){
			$(".dv").animate({left:"0"})

		})
		$(".navclose").click(function(){
			$(".dv").animate({left:"-90%"})
		})


		$(".navwordlink1").click(function(){
			$(".nav-level-1").toggleClass("nav-level-1-show");
			$(".icon1").toggleClass("icon-angle-right-rotate");
		})
		$(".navwordlink2").click(function(){
			$(".nav-level-2").toggleClass("nav-level-2-show");
			$(".icon2").toggleClass("icon-angle-right-rotate");
		})
		$(".navwordlink3").click(function(){
			$(".nav-level-3").toggleClass("nav-level-3-show");
			$(".icon3").toggleClass("icon-angle-right-rotate");
		})
		$(".navwordlink5").click(function(){
			$(".nav-level-5").toggleClass("nav-level-5-show");
			$(".icon5").toggleClass("icon-angle-right-rotate");
		})
		$(".navwordlink6").click(function(){
			$(".nav-level-6").toggleClass("nav-level-6-show");
			$(".icon6").toggleClass("icon-angle-right-rotate");
		})
		$(".navwordlink7").click(function(){
			$(".nav-level-7").toggleClass("nav-level-7-show");
			$(".icon7").toggleClass("icon-angle-right-rotate");
		})


		

		//login
		 $("#signoutmb").attr("style","display:none");
    	$("#login-button").click(function(event){
         event.preventDefault();
     
     	$('form').fadeOut(500);
     	$('.login_wrapper').addClass('form-success');
    	$('#welcome').html("欢迎");
      	$(".login_wrapper").fadeOut(1500);
    
        $("#loginonmb").attr("style","display:none");
        $("#signoutmb").attr("style","display:block");
     
		});


		$("#loginonmb").click(function(){
        // $(".login_wrapper").removeClass("login_wrapper_none");
        $(".login_wrapper").fadeIn(500);
        $(".dv").animate({left:"-90%"});
        })

       
     	//}
     	$(".login_close").click(function(){
        $(".login_wrapper").fadeOut(500);
     	})
		
		


		//banner图片切换
		$(".bannerword").addClass("mbnone");
        $(".wrapperpic1").attr("src","images/small/wrapper01.jpg");
        $(".wrapperpic2").attr("src","images/small/wrapper02.jpg");
        $(".wrapperpic3").attr("src","images/small/wrapper03.jpg");
        $(".wrapperpic4").attr("src","images/small/wrapper04.jpg");
        $(".wrapperpic5").attr("src","images/small/wrapper05.jpg");
        //musical
       
        //footer
        $(".footerbottom p").html("Copyright© 2016<br>雅马哈乐器音响（中国）投资有限公司<br>版权所有<a href=''>沪ICP备05040406号</a>");




        /*产品展示，手指滑动
        var mousestart_x=0;//按下鼠标的初始位置的x坐标
		var mousestop_x=0;//抬起鼠标前的最后位置的x坐标
		$(".recommendbig").mousedown(function(event){
			mousestart_x=event.pageX;

		});
		$(".recommendbig").mouseup(function(){
			//alert(mousestop_x=event.pageX)
			//alert(mousestop_x-mousestart_x);
		
			if (mousestop_x-mousestart_x>0) {
				//alert("123");
				var clone_1=$(".recommend:last").children().last().clone();
				if (!$(".recommendbig").is(":animated")) {
					clone_1.insertBefore($(".recommend:first").children().first());
					$(".recommendbig").attr("style","left:-100%");
					$(".recommendbig").animate({left:"0"},1000,function(){
						$(".recommend:last").children().last().remove();
					});
				}

				

			}
			else{
				var clone_1=$(".recommend:first").children().first().clone();
				if (!$(".recommendbig").is(":animated")) {
					$(".recommendbig").animate({left:"100%"},1000,function(){
						clone_1.insertAfter($(".recommend:last").children().last());
						$(".recommend:first").children().first().remove();
						$(".recommendbig").attr("style","left:0");
					});
				}
			}
			mousestart_x=0;
			mousestop_x=0;
		});



		$(".recommendbig").mousemove(function(event){
			mousestop_x=event.pageX;
			
		});*/








		//定义图片高度=屏幕高度
		$('.poster').css('height', $(window).height()+'px');

		//定义banner文字高度
		window.onload = function(){
		var a=$(".bannerwordmid img").css("height");
		var b=parseInt(a)/2;
		$(".bannerwordmid img").css("margin-top","-"+parseInt(a)/2+'px');

		//alert(parseInt(a)/2);
		}
		



		//手指滑动商品页面
		//初始化
		var mySwiper = new Swiper ('.swiper-container', {
    	loop: true,
    	pagination : '.swiper-pagination',
    	paginationClickable :true,
    	nextButton: '.btn_right',
        prevButton: '.btn_left',
    	
    	})

    	$(".swiper-pagination-bullet-active").css("background","white");

		


		

		





















	};
})




$(window).resize(function(){
	var i="";
	i=document.body.clientWidth;
	if (i<768) {

		//导航显示隐藏
		$(".m1,.m2").click(function(){
			$(".dv").animate({left:"0"})

		})
		$(".navclose").click(function(){
			$(".dv").animate({left:"-90%"})
		})


		$(".navword1").click(function(){
			$(".nav-level-1").toggleClass("nav-level-1-show");
			$(".icon1").toggleClass("icon-angle-right-rotate");
		})
		$(".navword2").click(function(){
			$(".nav-level-2").toggleClass("nav-level-2-show");
			$(".icon2").toggleClass("icon-angle-right-rotate");
		})
		$(".navword3").click(function(){
			$(".nav-level-3").toggleClass("nav-level-3-show");
			$(".icon3").toggleClass("icon-angle-right-rotate");
		})
		$(".navword5").click(function(){
			$(".nav-level-5").toggleClass("nav-level-5-show");
			$(".icon5").toggleClass("icon-angle-right-rotate");
		})


		


		
		


		//banner图片切换
		$(".bannerword").addClass("mbnone");
        $(".wrapperpic1").attr("src","images/small/wrapper01.jpg");
        $(".wrapperpic2").attr("src","images/small/wrapper02.jpg");
        $(".wrapperpic3").attr("src","images/small/wrapper03.jpg");
        $(".wrapperpic4").attr("src","images/small/wrapper04.jpg");
        $(".wrapperpic5").attr("src","images/small/wrapper05.jpg");
        //musical
       
        //footer
        $(".footerbottom p").html("Copyright© 2016<br>雅马哈乐器音响（中国）投资有限公司<br>版权所有<a href=''>沪ICP备05040406号</a>");




        /*产品展示，手指滑动
        var mousestart_x=0;//按下鼠标的初始位置的x坐标
		var mousestop_x=0;//抬起鼠标前的最后位置的x坐标
		$(".recommendbig").mousedown(function(event){
			mousestart_x=event.pageX;

		});
		$(".recommendbig").mouseup(function(){
			//alert(mousestop_x=event.pageX)
			//alert(mousestop_x-mousestart_x);
		
			if (mousestop_x-mousestart_x>0) {
				//alert("123");
				var clone_1=$(".recommend:last").children().last().clone();
				if (!$(".recommendbig").is(":animated")) {
					clone_1.insertBefore($(".recommend:first").children().first());
					$(".recommendbig").attr("style","left:-100%");
					$(".recommendbig").animate({left:"0"},1000,function(){
						$(".recommend:last").children().last().remove();
					});
				}

				

			}
			else{
				var clone_1=$(".recommend:first").children().first().clone();
				if (!$(".recommendbig").is(":animated")) {
					$(".recommendbig").animate({left:"100%"},1000,function(){
						clone_1.insertAfter($(".recommend:last").children().last());
						$(".recommend:first").children().first().remove();
						$(".recommendbig").attr("style","left:0");
					});
				}
			}
			mousestart_x=0;
			mousestop_x=0;
		});



		$(".recommendbig").mousemove(function(event){
			mousestop_x=event.pageX;
			
		});*/








		//定义图片高度=屏幕高度
		$('.poster').css('height', $(window).height()+'px');

		//定义banner文字高度
		window.onload = function(){
		var a=$(".bannerwordmid img").css("height");
		var b=parseInt(a)/2;
		$(".bannerwordmid img").css("margin-top","-"+parseInt(a)/2+'px');

		//alert(parseInt(a)/2);
		}
		



		//手指滑动商品页面
		//初始化
		var mySwiper = new Swiper ('.swiper-container', {
    	loop: true,
    	pagination : '.swiper-pagination',
    	paginationClickable :true,
    	nextButton: '.btn_right',
        prevButton: '.btn_left',
    	
    	})

    	$(".swiper-pagination-bullet-active").css("background","white");

}
})