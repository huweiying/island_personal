//动态加载页面尾部
(()=>{
	ajax("get","footer.html","","text")
		.then(html=>document.getElementsByTagName("footer")[0].innerHTML = html)
})();
//轮播图效果
(()=>{
    $.ajax({
		url:"data/index/index_pic.php",
		type:"get",
		data:{},
		success:(data)=>{
			var html = "";
			for(var i=0;i<data.lg.length;i++){
				html+=`<li class="lf">
                        <a href="#">
                            <img src="${data.lg[i]}" alt="">
                            <div class="center_banner center_pic${i+1}"></div>
                        </a>
                    </li>`;
			}
			html+=`<li class="lf">
                        <a href="#">
                            <img src="${data.lg[0]}" alt="">
                            <div class="center_banner center_pic1"></div>
                        </a>
                    </li>`;
			$("#banner>ul").html(html);
			html="";
			for(var i = 0;i<data.sm.length;i++){
				if(i==0) {
                    html += `<li class="lf"><a href="#"><img class="active" src="${data.sm[i]}" alt=""></a></li>`;
                }else{
                    html += `<li class="lf"><a href="#"><img src="${data.sm[i]}" alt=""></a></li>`;
                }
			}
			$("#sm_banner>ul").html(html);
			// 所有轮播图片加载完成
			const WIDTH = parseInt($("#banner").find("img").css("width"));
            //自动轮播功能
            var timer = null;
            var i = 0;
            var lis = $("#banner>ul>li")
            function play(){
                $("#banner>ul").css("left",-i*WIDTH);
                var sm = i;
                if(i==3){var sm = 0}
                $("#sm_banner>ul>li:eq("+sm+")").find("img").addClass("active")
                $("#sm_banner>ul>li:eq("+sm+")").siblings().find("img.active").removeClass("active");
                timer = setTimeout(()=>{
                    i++;
                    if(i==lis.length) {
                        i=0;
                        play();
                        $("#banner>ul").css("transition", "none");
                    }else if(i==1){
                        $("#banner>ul").css("transition","left .5s linear");
                        play();
                    }else{
                        play();
                    }
                },2000);
            }
            play();

            $(".banner").mouseenter(function(){
                clearTimeout(timer);
                timer = null;
            })
            $(".banner").mouseleave(function(){
            	console.log("1");
                play();
            })
            //实现点击小图获得对应广告图
			var smb = $("#sm_banner>ul>li");
            smb.click(function(e){
				e.preventDefault();
				var sm = $(this).index();
                $("#banner>ul").css("left",-sm*WIDTH);
                $("#sm_banner>ul>li:eq("+sm+")").find("img").addClass("active");
                $("#sm_banner>ul>li:eq("+sm+")").siblings().find("img.active").removeClass("active");

			})
		},
		error:()=>{alert("网络错误请检查")}
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
	/*下拉框*/

		var div = document.getElementsByClassName("sel_detail")[0];
		div.addEventListener("click",e=>{
			e.preventDefault();
			var tar = e.target;
			if(tar.nodeName == "SPAN"&&tar.id != "search"){
				var ul = tar.nextElementSibling;
				if(ul.className == "")
					ul.className = "active";
				else
					ul.className = "";
			}
			if(tar.nodeName == "A"&&tar.id!="multi"){
				tar.parentNode.parentNode.previousElementSibling.innerHTML =tar.innerHTML+"<b></b>";
			}
			if(tar.id=="multi"){
				var $div = $("#exclode");
				$div.toggleClass("active");
			}
			if(tar.nodeName == "LABEL"){
			}
		});

		// 鼠标移入图片旋转样式
		$('#island_pic').on('mouseenter','li',function(){
		    $(this).find('a').addClass('rotate');
		    $(this).find('div').addClass('rotate');
            $(this).find('p').addClass('animated slideInUp');
		});
		$('#island_pic').on('mouseleave','li',function(){
		    $(this).find('a').removeClass('rotate');
		    $(this).find('div').removeClass('rotate');
            $(this).find('p').removeClass('slideInUp');
		})














		
	
