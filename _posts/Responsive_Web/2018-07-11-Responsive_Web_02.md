---

layout: post

title:  "[IoT_반응형 웹] 2.반응형 웹 기초"

subtitle: "[IoT_반응형 웹] 2.반응형 웹 기초"

date:   2018-07-11 09:00:20 -0500

categories: IoT_Curriculum

tags: responsive_web

---

## 반응형 웹 기초

<br>
<br>
전 장에서 반응형 웹은 화면 너비에 따라 다른 환경을 제공한다고 했죠!
<br>
<br>
직접 실습을 통해서 연습해보겠습니다.
<br>
<br>
반응형 웹은 css로 구현가능하며,
<br>
<br>
틀은 다음과 같습니다.
<br>
<br>
<br>

```css
/* max일 때는 큰순으로 */
@media only screen and (max-width: 1200px){
	/*1200px 이상일 때 css 코드 작성: pc용*/
}

@media only screen and (max-width: 768px){
	/* 1200px ~ 480px일 때 css 코드 작성: 태블릿용 */
}

@media only screen and (max-width: 768px){ 
	/* 480px 이하일 때 css 코드 작성: 모바일용 */
}
```
<br>
<br>
<br>

```css
/* min일 때는 작은순으로 */
@media only screen and (min-width: 768px){
	/* 768px 이하일 때 css 코드 작성: 모바일용 */
}

@media only screen and (min-width: 768px){
	/* 1200px ~ 768px일 때 css 코드 작성: 태블릿용 */
}

@media only screen and (min-width: 1200px){
	/*1200px 이상일 때 css 코드 작성: pc용*/
}
```

<br>
<br>
<br>

```css
/* 범위를 주는 다른 방법 -많이 이용- */
@media only screen and (max-width: 768px){
	/* 768px 이하일 때 css 코드 작성: 모바일용 */
}

@media only screen and (min-width: 768px)and (max-width:1200px){
	/* 1200px ~ 768px일 때 css 코드 작성: 태블릿용 */
}

@media only screen and (min-width: 1200px){
	/*1200px 이상일 때 css 코드 작성: pc용*/
}
```

<br>
<br>
반응형 웹이라고 해서 딱히 어려운 것이 아니고,
<br>
<br>
해당되는 범위 안에 CSS로 지금까지 해왔던 것처럼 작성해줍니다.
<br>
<br>
어떻게 보면 지금까지 한 번맘 작성했던 코드 분량을 세 번해야하는 것과 같습니다 ㅠㅠ
<br>
<br>
예제를 보시죠!
<br>
<br>
<br>

```css
/* responsive1.css */
body{background: #333;}

@media only screen and (max-width: 768px){
	body{background-color: blue;}
}

@media only screen and (min-width: 768px)and (max-width:1200px){
	body{background-color: red;}
}

@media only screen and (min-width: 1200px){
	body{background-color: green;}
}
```

<br>
<br>
<br>

```xml
<!-- responsive1.html -->
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>반응형웹페이지</title>
	<link rel="stylesheet" href="responsive1.css">
</head>
<body>
	<p>연습</p>
</body>
</html>
```

<br>
<br>
실행결과 입니다.
<br>
<br>
<br>

![image](/image/RW_image/RW_image_03.png)

<br>
<br>
화면 너비에 따라 배경 색이 달라지는 것을 볼 수 있습니다!
<br>
<br>
참 신기하죠?
<br>
<br>
다음 장부터는 웹페이지를 직접 만들어보며 실습해보겠습니다!
