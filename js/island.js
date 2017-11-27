(()=>{
  ajax("get","footer.html","","text")
    .then(html=>document.getElementsByTagName("footer")[0].innerHTML = html)
})();

/**
 * Created by MacBooK on 2017/10/6.
 */
//在线咨询拖拽功能
var canMove = false;
var x = 0;
var y = 0;
document.getElementById("move").onmousedown = function(e){
    canMove = true;
    x = e.offsetX;
    y = e.offsetY;
};
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
$(()=>{
    // //给图片绑定轮播事件
    // var timer = null;
    // $(window).scroll( function() {
		// var y = document.body.scrollTop;
		// var item = $(".island_item");
		//
    // });
    var timer = null;
    $('.island_item>.lf,.island_item>.rf').mouseenter(function(e){
        timer = setInterval(()=>{
            var $show = $(this).find('.show');
            if($show.next().is('li')){
                $show.removeClass('show').next('li').addClass('show');
            }else{
                $show.removeClass('show');
                $(this).find('li:eq(0)').addClass('show');
            }

        },2000)
    })

    $('.island_item>.lf,.island_item>.rf').mouseleave(function(e){
        clearInterval(timer);
        timer = null;
        $(this).find('.show').removeClass('show');
        $(this).find('li:eq(0)').addClass('show');
    })
})