$(function(){
	var i="";
	i=document.body.clientWidth;
	if (i>=768) {

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



        //type
        $(".product-style").click(function(){
            $(".product-style").removeClass("product-style-black");
            $(this).addClass("product-style-black");
        })

        //切换
        $(".pt-detail-pc-word").click(function(){
            $(".pt-detail-pc-word a").removeClass("triangle");
            $(this).children("a").addClass("triangle");
            var num=$(this).index();
            if (num==0) {
                $(".detaili").removeClass("act").eq(0).addClass("act");
            }
            else if(num==1){
                $(".detaili").removeClass("act").eq(1).addClass("act");
            }
            else if(num==2){
                $(".detaili").removeClass("act").eq(2).addClass("act");
            }
        })

        //addnum

        var val;
        
            $(".addnumright").click(function(){
                val=$("#inputval").val();
              
                if (val<10&&val>0){
                    $("#inputval").val(++val);
                }
                
            });
            $(".addnumleft").click(function(){
                val=$("#inputval").val();
                if (val<=0&&val>0){
                $("#inputval").val(--val);
                }
            });
        



     	//footer
        $(".footerbottom p").html("Copyright© 2016&nbsp&nbsp&nbsp雅马哈乐器音响（中国）投资有限公司&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp<a href=''>沪ICP备05040406号</a>");



















	}
})







$(window).resize(function(){
    var i="";
    i=document.body.clientWidth;
    if (i>=768) {

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



        //type
        $(".product-style").click(function(){
            $(".product-style").removeClass("product-style-black");
            $(this).addClass("product-style-black");
        })

        //切换
        $(".pt-detail-pc-word").click(function(){
            $(".pt-detail-pc-word").removeClass(".pt-detail-pc-word a:hover::after");
            $(this).addClass(".pt-detail-pc-word a:hover::after");
            var num=$(this).index();
            if (num==0) {
                $(".detaili").removeClass("act").eq(1).addClass("act")
            }
            else if(num==1){
                $(".detaili").removeClass("act").eq(2).addClass("act")
            }
            else if(num==2){
                $(".detaili").removeClass("act").eq(3).addClass("act")
            }
        })


        //footer
        $(".footerbottom p").html("Copyright© 2016&nbsp&nbsp&nbsp雅马哈乐器音响（中国）投资有限公司&nbsp&nbsp&nbsp|&nbsp&nbsp&nbsp<a href=''>沪ICP备05040406号</a>");
}
})