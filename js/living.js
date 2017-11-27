//动态加载页面尾部
(()=>{
	ajax("get","footer.html","","text")
		.then(html=>document.getElementsByTagName("footer")[0].innerHTML = html)
})();
//加载图片淡入淡出效果
(()=>{
	var timer = null;
	$(".hotel_item>ul").mouseenter(function(e){
		timer = setInterval(()=>{
			var show = $(this).find(".show");
			if(show.next().is("li")){
				show.removeClass("show").next("li").addClass("show");
			}else{
				show.removeClass("show");
				$(this).children("li").first().addClass("show");
			}
		},2000)
	})
	$(".hotel_item>ul").mouseleave(function(e){
		clearInterval(timer);
		timer = null;
		$(this).children("li").first().addClass("show").siblings(".show").removeClass("show");
	})
})()

//给页面绑定鼠标滚动事件
$(document).on("mousewheel DOMMouseScroll", function (e) {

    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

    var top = document.body.scrollTop||document.html.scrollTop;
    if (delta > 0) {
        // 向上滚
        $(".hotel_show").removeClass("animated slideInUp");

    } else if (delta < 0) {
        // 向下滚
		console.log(top);
        if(top >= 300){
            $(".hotel_show:eq(0)").addClass("animated slideInUp");
        }
        if(top >= 1300) {
            $(".hotel_show:eq(1)").addClass("animated slideInUp");
        }

    }
});
$(".hotel_item>h4").hover(
	function(){$(this).hover("");$(this).addClass("animated rubberBand")},
	function(){$(this).removeClass("animated rubberBand")}
);
