---

layout: post

title:  "[IoT_반응형 웹] 3.실습:saint"

subtitle: "[IoT_반응형 웹] 3.실습:saint"

date:   2018-07-11 09:00:20 -0500

categories: IoT_Curriculum

tags: responsive_web

---

## saint

<br>
<br>

```css
/* saint.css */
* {box-sizing: border-box;}
body{height: 2000px;
	padding:7px;}

.gnb li{height: 15px;
	background-repeat:no-repeat; 
	background-position:left center; 
	float:left;
	text-indent:20px;
	margin:5px;}
.gnb li:nth-child(1){background-image: url(icn_contact.jpg);}
.gnb li:nth-child(2){background-image: url(icn_news.jpg);}
.gnb li:nth-child(3){background-image: url(icn_sitemap.jpg);}
h1{float:left;}
.gnb{float:right;}
.visual img{width: 100%;}
.nav ul{overflow:hidden;
	border-bottom: 3px double #000;}
.nav li{width:16.66667%; float:left;
	text-align:center;
	border-right:1px dotted #000;}
.nav li:last-child{border-right:none;}

.content{overflow:hidden;}
.content article{width:33.3333%; float:left; padding:15px; margin:10px 0;}
.content img{width: 100%;}
.content h3{text-align:center; padding:15px;}
.news,.info{padding:15px; margin: 10px 0; }
.news h2, .info h2{background: url(bg_headerLine.jpg) repeat-x left bottom;}
.news p{text-decoration: underline;}
.info img{display:block; margin:5px 0;}

.foot-bg{height: 95px;background: url(bg_footer.jpg) no-repeat center top;
	border-bottom: 5px solid #000;}
.footer{text-align:center;}

@media only screen and (max-width: 480px){
	h1, .gnb{float:none;}
	.header{text-align:center;}
	.gnb{display:inline-block;overflow:hidden;}
	.nav li{width:50%; 
		text-align:center;
		border:none;
		border-bottom: 2px solid #000;}
	.nav li:nth-child(odd){border-right:1px dotted #000;}
	.nav ul{border:none;}
	.content article{width:50%;}
	.content p{display:none;}
}

@media only screen and (min-width: 480px)and (max-width:1200px){
	.content article {width:100%;}
	.content img{width:50%; float:left;}
	.content p{margin-left:52%;}
}

@media only screen and (min-width: 1200px){
	.wrap{max-width:1200px; margin:auto;}
	.wrap2{overflow:hidden;}
	.news{width: 47%;margin: 10px 0; float:left; }
	.info{width: 47%;margin: 10px 0; float:right; }
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
	<link rel="stylesheet" href="saint.css">
	<title>SAINT LAURENT</title>
</head>
<body>
	<div class="wrap">
		<div class="header">
			<h1><img src="img_logo.png" alt=""></h1>
			<ul class="gnb">
				<li>contact</li>
				<li>news</li>
				<li>sitemap</li>
			</ul>
			
		</div>
		<div class="visual">
			<img src="topImage1.jpg" alt="">
		</div>
		<div class="nav">
			<ul>
				<li><img src="nav_home.jpg" alt=""></li>
				<li><img src="nav_service.jpg" alt=""></li>
				<li><img src="nav_works.jpg" alt=""></li>
				<li><img src="nav_company.jpg" alt=""></li>
				<li><img src="nav_recruit.jpg" alt=""></li>
				<li><img src="nav_contact.jpg" alt=""></li>
			</ul>
		</div>
		<div class="content">
			<h2>Works</h2>
			<article>
				<img src="img_works01.jpg" alt="">
				<h3>TOUCHE ECLAT CUSHION</h3>
				<p>The YSL cushion compact is described as lightweight, sheer, buildable coverage formula to give skin a fresh dewy glow and natural finish.</p>
			</article>
			<article>
				<img src="img_works02.jpg" alt="">
				<h3>VOLUPTE TINT-IN-BALM</h3>
				<p>Arlier this year YSL launched a new lipstick called the Volupte Tint-In-Balm ($34 each for 0.12 oz/3.5 g, made in France)</p>
			</article>
			<article>
				<img src="img_works03.jpg" alt="">
				<h3>SPARKLING EDITION CUSHION</h3>
				<p>YSL Le Cushion Encre de Peau Cushion Foundation is a new, more portable version of Yves Saint Laurent Fusion Ink Le Teint Encre De Peau Foundation.</p>
			</article>
			<article>
				<img src="img_works04.jpg" alt="">
				<h3>TOUCHE ECLAT MAGIC PEN</h3>
				<p>A highlighting pen that brightens, smooths, and perfects your complexion with a natural-looking, radiant finish.</p>
			</article>
			<article>
				<img src="img_work00.jpg" alt="">
				<h3>MON PARIS EAU DE TOILETTE</h3>
				<p>Capturing the spirit of an intense love affair, YSL Beauté introduces Mon Paris perfume - a new expression of love today, inspired by the city of lovers, Paris.</p>
			</article>
		</div>
		<div class="wrap2">
			<div class="news">
				<h2>news</h2>
				<ul>
					<li>
						<h3>2017.10.15</h3>
						<p>LE VESTIAIRE DES PARFUMS - At the dawn of every fashionable creation, is material. Tangible, tactile, it comes before everything else. Precedes shape.</p>
					</li>
					<li>
						<h3>2017.10.31</h3>
						<p>TUXEDO - The Tuxedo by Yves Saint Laurent is associated with seduction, eroticism, but also with a certain form of impertinence.</p>
					</li>
					<li>
						<h3>2017.11.01</h3>
						<p>FOREVER YOUTH LIBERATOR SERUM - Liberate your skin’s youthful appearance with the first anti-ageing Serum by Yves Saint Laurent.</p>
					</li>
				</ul>
			</div>
			<div class="info">
				<h2>INFORMATION</h2>
				<img src="be.png" alt="">
				<img src="bee.png" alt="">	
			</div>
		</div>
	</div>
	<div class="foot-bg">
	</div>
	<div class="footer">
		<img src="img_logo_ss.jpg" alt="">
		<p>입생로랑<br>
		본사: 롯데백화점 에비뉴엘<br>
		B1F Lotte Avenuel, 130 Namdaemunro-2GA, Jung-Gu,Seoul</p>
		<p>Copyright © 2013 Responsive corporation. All Rights Reserved</p>
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

<a href="http://htmlpreview.github.io/?https://github.com/kookyungmin/kookyungmin.github.io/blob/master/UI%EC%88%98%EC%97%85%EC%98%88%EC%A0%9C/SAINT%20LAURENT/saint.html">실행결과</a>

