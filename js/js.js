// JavaScript Document
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]: getComputedStyle(obj)[attr];
};
function doMove ( obj, attr, dir, target, endFn ) {
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	clearInterval( obj.timer );
	obj.timer = setInterval(function () {
		var speed = parseInt(getStyle( obj, attr )) + dir;			// 步长
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		obj.style[attr] = speed + 'px';
		if ( speed == target ) {
			clearInterval( obj.timer );	
			endFn && endFn();
		}
	}, 30);
}
$(function(){
	var owi = document.documentElement.clientWidth;
	
	
	
$("#top").on("click",function(){
        var time=setInterval(function(){
            $(document).scrollTop($(document).scrollTop()-10);
            if($(document).scrollTop()<=0){
                clearInterval(time);
            }
        },1);
    });
	
$(window).scroll(function(){
		if($(document).scrollTop()>=300){
            $("#top").show()
        }else{
            $("#top").hide()
        }
		
		if($(document).scrollTop()>=$("#feature").offset().top-500){
            $("#feature").css("opacity","1");
            $("#feature").addClass("slideInLeft animated");
            $("#feature p").addClass("zoomInRight animated");
			$("#feature1").css("opacity","1");
            $("#feature1").addClass("slideInRight animated");
            $("#feature1 p").addClass("zoomInLeft animated");
        }
		
		if($(document).scrollTop()>=$("#advantage").offset().top-100){
            $("#advantage").css("opacity","1");
            $("#advantage .advantage").find("h4").addClass("swing animated");
			
            $("#advantage .advantage").find("li").addClass("fadeInUp animated");
			
            $("#advantage").find("button").addClass("bounceInDown animated");
        }
		
		if($(document).scrollTop()>=$("#contact").offset().top-500){
            $("#contact .left").css("opacity","1");
			$("#contact .right").css("opacity","1");
            $("#contact .left").addClass("slideInLeft animated");
			$("#contact .right").addClass("slideInRight animated");
        }

})

})