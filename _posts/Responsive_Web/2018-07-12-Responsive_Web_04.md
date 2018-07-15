---

layout: post

title:  "[IoT_반응형 웹] 4.실습:TechCrunch"

subtitle: "[IoT_반응형 웹] 4.실습:TechCrunch"

date:   2018-07-12 09:00:20 -0500

categories: IoT_Curriculum

tags: responsive_web

---

## TechCrunch

<br>
<br>

```css
/* TechCrunch.css */
* {box-sizing: border-box;}
body{width:100%; background: #ffffe5; font-size: 75%;}
.wrap-bg{width:92%; background: 	#ffece5;  margin:20px 5%;
	padding: 0 2.307692307692%; overflow:hidden;
	font-family: "Lucida Grande", "Myriad Pro", sans-serif;}

/* wrap */
.wrap{width:73.2%; float:left; }
/*header */
.header{background: #e5ecff; color:#000; font-weight: bold;}
.header h1{font-size: 3.57142857142857em; }
.header p{font-size: 0.22em;}

/* nav */
.nav{text-align:center; }
#nav1{background: #0000cc; }
#nav2{background: #0000cc;}
#nav2 li{display:inline-block; margin: 0 1.869158878505%;}
#nav1 a,#nav2 a{display:block; color:#fff; padding:10px 5px; 
	text-decoration:none;}


/*content*/
.content{overflow:hidden; background: #e5ecff;}
#date{font-style: italic;}
/* con1-bg */
.con1-bg{width: 58%; background: #fff;float:left;}
.con1{padding-left: 2.395209580838%;
	padding-right: 3.592814371257%; padding: 6.666666666667%; }
.con1 h2{font-size: 2em; color: #fff;background-color: #000;
	    padding: 0.53571428571429em 3.846153846154%;
		display: inline-block;}
.con1 img{width:100%; }
.con1 a{color:blue;}
.con1 a:hover{color:skyblue;}
/* con2-bg */
.con2-bg{width: 42%; float:left; }
.con2{ padding: 6.666666666667%;
	padding-right: 2.395209580838%;
	padding-left:3.592814371257%}
.con2 a{color:blue;}
.con2 a:hover{color:skyblue;}
.con2 h3{font-size: 1.17em;}
	
/* wrap2 */
.wrap2{width:24.12%; background: #fff; float:right;}
.con3{padding: 7.272727272727%;}
.con3 h2{font-size: 1.17em;}
.con3 ul li a{color: blue;}
.con3 ul li a:hover{color:skyblue;}
.con3 figure{margin:0; padding: 6.666666666667%;}
.con3 img{width:100%;}

@media only screen and (max-width: 768px){
	.wrap-bg{margin:0;}
	.wrap-bg{width:100%; padding:0;}
	.wrap{width:100%;}
	#nav2{display:none;}
	#nav1{width:100%; }
	#nav1 a{padding:0.71428571428571em 0; display:block;}
	.wrap,.wrap2,.con1-bg,.con2-bg{width:100%; float:none;}
}

@media only screen and (min-width: 768px)and (max-width:1200px){
	#nav1{display:none;}
	.wrap{width:63%;}
	.wrap2{width:32%;}
	.con1-bg,.con2-bg{width:100%; float:none;}
	
	
}

@media only screen and (min-width: 1200px){
	#nav1{display:none;}
}
```

<br>
<br>
<br>

```xml
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="reset.css">
	<link rel="stylesheet" href="TechCrunch.css">
	<title>꾸리블로그</title>
</head>
<body>
<div class="wrap-bg">
	<div class="wrap">
		<div class="header">
			<h1>꾸리블로그</h1>
			<p>반응형웹페이지 테스트</p>
		</div>
		<div class="nav">
			<p id="nav1"><a href="kookyungmin.github.io">Menu</a></p>
			<ul id="nav2">
				<li><a href="https://kookyungmin.github.io/">Home</a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-html5/">Html</a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-css/">CSS</a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-responsive-web/">반응형웹</a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-oracle/">Oracle</a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-java/">java</a></li>
			</ul>
		</div>
		
		<div class="content">
			<div class="con1-bg">
				<div class="con1">
					<h2>반응형웹페이지</h2>
					<p id="date">2018 Jul 12</p>
					<h3>반응형 웹 페이지 만들기 테스트</h3>
					<p>반응형 웹 페이지란 사용자에게 화면 비율에 따라서 다양한 환경을 제공하는 것입니다.
					편리합니다~</p>
					<img src="temp-video.jpg" alt="">
					<p>반응형 웹페이지 및 다른 개발언어를 배우고 싶은 분들은 저의 블로그 <a href="kookyungmin.github.io">꾸리블로그</a>를 참고하세요!</p>
				</div>
			</div>
			<div class="con2-bg">
				<div class="con2">
					<h3>작성자:구경민</h3>
					<p id="date">2018 July 12</p>
					<h3>개인 블로그: <a href="kookyungmin.github.io">kookyungmin.github.io</a></h3>
					<p></p>
				</div>
			</div>
		</div>
	</div>
	<div class="wrap2">
		<div class="con3">
			<h2>목록</h2>
			<ul>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-html5/">-HTML5 </a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-css/">- CSS</a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-java/">- Java</a></li>
				<li><a href="https://kookyungmin.github.io/tag/iot-curriculum-responsive-web/">- 반응형웹</a></li>
			</ul>
			<figure>
			<a href=""><img src="banner.jpg" alt=""></a>
			<a href=""><img src="banner.jpg" alt=""></a>
			</figure>
			
		</div>
	</div>
</div>	
</body>
</html>
```

<br>
<br>
실행결과 입니다.
<br>
<br>
<br>

<a href="http://htmlpreview.github.io/?https://github.com/kookyungmin/kookyungmin.github.io/blob/master/UI%EC%88%98%EC%97%85%EC%98%88%EC%A0%9C/TechCrunch-%EA%B5%AC%EA%B2%BD%EB%AF%BC/TechCrunch.html">실행결과</a>

