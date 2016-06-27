$(function(){
	var i="";
	i=document.body.clientWidth;
	if (i<768) {
		$(".mbul").click(function(){
			$(".mblock").toggleClass("mbnone")
		})



		//导航显示隐藏
		$(".m1,.m2").click(function(){
			$(".dv").animate({left:"0"})

		})
		$(".navclose").click(function(){
			$(".dv").animate({left:"-90%"})
		})


		$(".navword1 a").click(function(){
			$(".nav-level-1").toggleClass("nav-level-1-show");
			$(".icon1").toggleClass("icon-angle-right-rotate");
		})
		$(".navword2 a").click(function(){
			$(".nav-level-2").toggleClass("nav-level-2-show");
			$(".icon2").toggleClass("icon-angle-right-rotate");
		})
		$(".navword3 a").click(function(){
			$(".nav-level-3").toggleClass("nav-level-3-show");
			$(".icon3").toggleClass("icon-angle-right-rotate");
		})
		$(".navword5 a").click(function(){
			$(".nav-level-5").toggleClass("nav-level-5-show");
			$(".icon5").toggleClass("icon-angle-right-rotate");
		})




	}
})