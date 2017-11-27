//动态加载页面尾部
(()=>{
	ajax("get","footer.html","","text")
		.then(html=>document.getElementsByTagName("footer")[0].innerHTML = html)
})();

/*从数据库获取页面内容*/
(()=>{
    $.ajax({
        url:"data/boating/boating.php",
        type:"get",
        data:{},
        success:(data)=>{
            for(var i = 0 ;i<data.length;i++)
                $(".boating img:eq("+i+")").attr("src",data[i].bpic);
            // 绑定鼠标进入轮播事件

            const WIDTH = parseFloat($(".boating_item img").css("width"));
            var bol = false;
            var timer = null;
            var i = 0;
            function move($this,len){
                if(bol){
                    i++;
                    selectpic($this,len);
                }
            }
            function selectpic($this,len) {
                $this.children("ul").animate({
                    left:-i*WIDTH
                },500,()=>{
                    if(i==len){
                        i=-1;
                        $this.children("ul").css("left",0);
                    }
                });
            }
            $(".boating_item").mouseenter(function(e){
                i = 0;
                bol = true;
                var $this = $(this);
                var len = $(this).find("ul>li").length;
                timer = setInterval(move.bind(null,$this,len),2000)
            })
            $(".boating_item").mouseleave(function(e){
                bol = false;
                $(this).children("ul").css("left",0);
                clearInterval(timer);
                timer=null;
            })
            //鼠标移入事件标题特效
            $(".boating_item").mouseenter(function(e){
                $(this).children("h3").addClass("animated fadeInDown");
            })
            $(".boating_item").mouseleave(function(e){
                $(this).children("h3").removeClass("animated fadeInDown");
            })
            $(".order>button").hover(
                function(){$(this).addClass("animated rubberBand")},
                function(){$(this).removeClass("animated rubberBand")}
            )
            //给页面绑定鼠标滚动事件
            $(document).on("mousewheel DOMMouseScroll", function (e) {

                var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                    (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

                var top = document.body.scrollTop||document.html.scrollTop;
                if (delta > 0) {
                    // 向上滚
                    $(".boating_item").removeClass("animated slideInUp");

                } else if (delta < 0) {
                    // 向下滚
                    if(top >= 100){
                        $(".boating_item:lt(2)").addClass("animated slideInUp");
                    }
                    if(top >= 500) {
                        $(".boating_item:eq(2),.boating_item:eq(3)").addClass("animated slideInUp");
                    }
                    if(top >= 900) {
                        $(".boating_item:eq(4)").addClass("animated slideInUp");
                    }
                }
            });
        }
    })

})()
//在线咨询拖拽功能
var canMove = false;
var x = 0;
var y = 0;
document.getElementById("move").onmousedown = function(e){
    canMove = true;
    x = e.offsetX;
    y = e.offsetY;
}
onmousemove = function(e){
    var div = document.getElementById("move");
    if(canMove){
        div.style.left = (e.clientX-x)+"px";
        div.style.top = (e.clientY-y)+"px";
    }
}
document.getElementById("move").onmouseup = function(){
    canMove = false;
}

