$(function(){
	$(".m1").click(function(){
	$(".dv").toggleClass("dvchange");


})
	$(".m2").click(function(){
	$(".dv").toggleClass("dvchange");
})
})





var curIndex=0;
//时间间隔 单位毫秒
var timeInterval=2000;
var arr=new Array();
arr[0]="images/small/wrapper2.jpg";
arr[1]="images/small/wrapper1.jpg";
/*arr[2]="3.jpg";
arr[3]="4.jpg";
arr[4]="5.jpg";
arr[5]="6.jpg";
arr[6]="7.jpg";*/
setInterval(changeImg,timeInterval);
function changeImg()
{
    var wrapper=document.getElementById("wrapper");
    if (curIndex==arr.length-1) 
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    wrapper.src=arr[curIndex];
}
