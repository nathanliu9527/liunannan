function verify(){
	var username = document.getElementById("username").value;
	var passd = document.getElementById("password").value;
	
	if (username == ""){
		alert("请输入用户名！");
	}else if(passd == ""){
		alert("请输入密码！");
	}else if(username != "barry123" && passd != "barry_123"){
		alert("用户名或密码错误！");
	}else{
		alert("欢迎您");
		window.open("./first_page.html");
	}
	
}