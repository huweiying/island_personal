//动态加载页面头部
(()=>{
	ajax("get","header.html","","text")
		.then(html=>{
			document.getElementsByTagName("header")[0].innerHTML = html;
			ajax("get","data/index/getUser.php","","text")
				.then(data=>{
				if(data!="false"){
					document.getElementById("login").innerHTML = "welcome  "+data;
					$("#register").hide();
				}else{
					$("#logout").hide();
					$("#login").show();
				}
			})
					//登录模态框
					document.getElementById("login").onclick = function(){
						document.getElementById("login_box").className = "login_box";
					}
					var buttons = document.querySelectorAll("#login_box button");
					buttons[0].onclick = function(){
						var uname = document.querySelector("#login_box input[type='text']").value;
						var upwd = document.querySelector("#login_box input[type='password']").value;
						ajax("get","data/index/login.php?uname="+uname+"&upwd="+upwd,"","text")
							.then((data)=>{
								if(data=="succ"){
									document.getElementById("login_box").className = "login_box hidden";
									document.getElementById("login").innerHTML = "welcome "+uname;
								}else{
									alert("用户名或密码错误");
								}
							})
					}
					buttons[1].onclick = function(){
						document.getElementById("login_box").className = "login_box hidden";
					}
			
				
				
			var as = document.querySelectorAll("nav>ul>li>a");
			for(let i=0;i<as.length;i++){
				var href = location.pathname.split("/")[2];
				var a_href = as[i].href.split("/")[4];
				(href == a_href)&&(document.querySelector("nav>ul>li:nth-child("+(i+1)+")>a").className = "active");
			
				as[i].onclick = function(){
						var active = document.querySelector("nav>ul>li>a[class='active']");
						if(active){
							active.className = "";
						}
						this.className = "active";
					
				}
			}

			
			//注销
			$("#logout").click(e=>{
				ajax("get","data/index/logout.php","","text")
					.then(()=>{
						location.reload();
					})
			})
			
			//导航
			$("nav").on("mouseenter","#navbar>li",e=>{
				var $tar = $(e.target).children().first();
				$tar.addClass("active");
			})
			$("#navbar>li").hover(
				function(){
					var $tar = $(this).children().first();
					$tar.addClass("active");
					$tar.next().addClass("active");
			}
			,	
				function(){
					var $tar = $(this).children().first();
					$tar.next().removeClass("active");
					if($tar.attr("href")!=location.pathname.split("/")[2]){
						$tar.removeClass("active");
					}
			})
		
		})


})();


