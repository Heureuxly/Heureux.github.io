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