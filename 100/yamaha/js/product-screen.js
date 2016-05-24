$(function(){
	var i="";
	i=document.body.clientWidth;
	if (i<768) {
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
			pagination : '.swiper-pagination',
    		paginationClickable :true,
		})



	//商品详情页
	$(".trigger").click(function(){
		$(".trigger").removeClass("act");
		$(this).addClass("act");
		var num=$(this).index();
		if (num==0) {
			$(".detaili").removeClass("act").eq(1).addClass("act");
		}
		else if (num==1) {
			$(".detaili").removeClass("act").eq(2).addClass("act");
		}
	
		else if (num==2) {
			$(".detaili").removeClass("act").eq(3).addClass("act");
		}
		else{
			$(".detaili").removeClass("act")
		}

	})
	
	




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









































































	}
})



$(window).resize(function(){
	var i="";
	i=document.body.clientWidth;
	if (i<768) {
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true,
			prevButton:'.swiper-button-prev',
			nextButton:'.swiper-button-next',
			pagination : '.swiper-pagination',
    		paginationClickable :true,
		})



	//商品详情页
	$(".trigger").click(function(){
		$(".trigger").removeClass("act");
		$(this).addClass("act");
		var num=$(this).index();
		if (num==0) {
			$(".detaili").removeClass("act").eq(1).addClass("act");
		}
		else if (num==1) {
			$(".detaili").removeClass("act").eq(2).addClass("act");
		}
	
		else if (num==2) {
			$(".detaili").removeClass("act").eq(3).addClass("act");
		}
		else{
			$(".detaili").removeClass("act")
		}

	})
	
	




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
	}

})