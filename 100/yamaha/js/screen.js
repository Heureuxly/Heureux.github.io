//手机版本js
//屏幕加载事件
$(function(){
	var i="";
	i=document.body.clientWidth;
	if (i<768) {

		//导航显示隐藏
		$(".m1").click(function(){
		$(".dv").toggleClass("dvchange");
		})
		$(".m2").click(function(){
		$(".dv").toggleClass("dvchange");
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




        //产品展示，手指滑动
        var mousestart_x=0;//按下鼠标的初始位置的x坐标
		var mousestop_x=0;//抬起鼠标前的最后位置的x坐标
		$(".recommendbig").mousedown(function(event){
			mousestart_x=event.pageX;

		});
		$(".recommendbig").mouseup(function(){
			alert(mousestop_x=event.pageX)
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
			
		});








		//定义图片高度=屏幕高度
		$('.poster').css('height', $(window).height()+'px');































	};
})