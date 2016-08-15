$(function(){
	$(".button").click(function(){
		$(".menu").toggleClass("menu_out");
	})

	$(".menu_1 li").eq(0).click(function(){
		$(".menu_2").toggleClass("menu_hide");
	})
})