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
        $(".musicalpic_1").attr("src","images/small/musical01.jpg");
        $(".musicalpic_2").attr("src","images/small/musical02.jpg");
        $(".musicalpic_3").attr("src","images/small/musical03.jpg");
        //footer
        $(".footerbottom p").html("Copyright© 2016<br>雅马哈乐器音响（中国）投资有限公司<br>版权所有<a href=''>沪ICP备05040406号</a>");




        //产品展示，手指滑动
        







































	};
})