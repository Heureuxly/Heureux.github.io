$(function(){
	var i="";
	i=document.body.clientWidth;
	if (i>=768) {
		$(".shopproduct-once").mouseenter(function(){
			$(this).find(".fixed-btn").fadeIn();
		})
		$(".shopproduct-once").mouseleave(function(){
			$(this).find(".fixed-btn").fadeOut();
		})



		$(".mainblock").click(function(){
        	$.scrollTo('.p1',1000); 
   		})








	}
})