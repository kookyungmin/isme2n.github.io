---

layout: post

title:  "[IoT_반응형 웹] 5.Flex(1)"

subtitle: "[IoT_반응형 웹] 5.Flex(1)"

date:   2018-07-13 09:00:20 -0500

categories: IoT_Curriculum

tags: responsive_web

---

## Flex 속성

<br>
<br>
지금까지 레이아웃을 만들 때 메뉴를 만들거나 블록들을 배치할 때 float을 사용해왔습니다.
<br>
<br>
그런데, float은 여간 불편한 것이 아닙니다.
<br>
<br>
부모 박스에 overflow:hidden도 일일히 추가시켜주어야하고,
<br>
<br>
그 다음 박스에 clear:both; 도 추가해주어야합니다.
<br>
<br>
또 박스들을 배치할 때, width를 신경써야하고, 원하는 순서대로 배치시키려면,
<br>
<br>
position 속성을 추가해서 top, left을 이용해야합니다.
<br>
<br>
정말 복잡하죠!
<br>
<br>
그래서 최근에는 레이아웃을 배치할 때 flex 속성을 많이 이용합니다.
<br>
<br>
flex가 어떤 역할을 하는지 잘 감이 안오시죠?
<br>
<br>
지금부터 예제를 보면서 속성하나하나 살펴보겠습니다.
<br>
<br>
일단, 예제를 작성할 때 다음과 같이 기본적으로 셋팅해놓겠습니다.
<br>
<br>
<br>

```xml
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>flex</title>
	<style>
		*{
			margin:0; padding:0;
			box-sizing:border-box;
		}
		h1{
			font-size:15px; 
			margin-bottom:10px;
		}
		.con{
			border:5px solid #00f;
			width:30%; 
			margin:10px;
			height:175px;
		}
		.con p{
			border:1px solid #000;
			font-size:15px;
			text-align:center;
			background: #aaa;
		}
		
		.container1{
		
		}
		
		.container2{
			
		}
		
		.container3{
			
		}
		
		.container4{
			
		}
		
		.container5{
			
		}
		
	</style>
</head>
<body>
		<h1>속성: </h1>
		<div class="container1 con">
			<p>item1</p>
			<p>item2</p>
			<p>item3</p>
			<p>item4</p>
			<p>item5</p>
		</div>
		<h1>속성: </h1>
		<div class="container2 con">
			<p>item1</p>
			<p>item2</p>
			<p>item3</p>
			<p>item4</p>
			<p>item5</p>
		</div>
		<h1>속성: </h1>
		<div class="container3 con">
			<p>item1</p>
			<p>item2</p>
			<p>item3</p>
			<p>item4</p>
			<p>item5</p>
		</div>
		<h1>속성: </h1>
		<div class="container4 con">
			<p>item1</p>
			<p>item2</p>
			<p>item3</p>
			<p>item4</p>
			<p>item5</p>
		</div>
		<h1>속성: </h1>
		<div class="container5 con">
			<p>item1</p>
			<p>item2</p>
			<p>item3</p>
			<p>item4</p>
			<p>item5</p>
		</div>
</body>
</html>	
```

<br>
<br>
<br>

![image](/image/RW_image/RW_image_04.png)

<br>
<br>

## FLEX-DIRECTION

<br>
<br>
FLEX-DIRECTION 속성은 flex요소를 정렬할 방향을 지정하는 속성이고,
<br>
<br>
다음과 같은 속성값이 있습니다.
<br>
<br>
<br>

- row: 요소들을 텍스트의 방향과 동일하게 정렬함(기본값)
<br>
<br>
- row-reverse: 요소들을 텍스트의 반대방향으로 정렬
<br>
<br>
- column: 요소들을 위에서 아래로 정렬
<br>
<br>
- column-reverse: 요소들을 아래에서 위로 정렬

<br>
<br>
일단, flex 속성을 이용하려면, 부모 박스에 display:flex; 를 추가해야합니다.
<br>
<br>
<br>

```css
.con p{
	height:30px;
}
.container1{
	display:flex;
}
		
.container2{
	display:flex;
}
		
.container3{
	display:flex;
}
		
.container4{
	display:flex;
}
		
.container5{
	display:flex;
}
```

<br>
<br>
실행결과
<br>
<br>
<br>

![image](/image/RW_image/RW_image_05.png)

<br>
<br>
와우! float한 결과와 동일하게 블록들이 옆으로 붙어버렸네요!
<br>
<br>
이제 FLEX DIRECTION 속성에 대한 예제를 진행해보죠!
<br>
<br>
<br>

```css
.con p{
	height:30px;
}

.container1{
	display:flex;
	flex-direction: row;
}
		
.container2{
	display:flex;
	flex-direction: row-reverse;
}
		
.container3{
	display:flex;
	flex-direction: column;
}
		
.container4{
	display:flex;
	flex-direction: column-reverse;
}
		
.container5{
	display:flex;
}
```

<br>
<br>
<br>

![image](/image/RW_image/RW_image_06.png)

<br>
<br>

## JUSTIFY-CONTENT

<br>
<br>
justify-content 속성은 가로축을 기준으로 flex 요소들을 정렬하는 속성입니다.
<br>
<br>
속성 값은 다음과 같습니다.
<br>
<br>
<br>

- flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다. (기본 값)
<br>
<br>
- flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
<br>
<br>
- center: 요소들을 컨테이너의 가운데로 정렬합니다.
<br>
<br>
- space-between: 요소들 사이에 동일한 간격을 둡니다.
<br>
<br>
- space-around: 요소들 주위에 동일한 간격을 둡니다.

<br>
<br>
<br>

```css	
.con p{
	height:30px;
}

.container1{
	display:flex;
	justify-content: flex-start;
}
		
.container2{
	display:flex;
	justify-content: flex-end;
}
		
.container3{
	display:flex;
	justify-content: center;
}
		
.container4{
	display:flex;
	justify-content: space-between;
}
		
.container5{
	display:flex;
	justify-content: space-around;
}
```

<br>
<br>
<br>

![image](/image/RW_image/RW_image_07.png)

<br>
<br>

## ALIGN-ITEMS

<br>
<br>
align-items 속성은 세로축을 기준으로 flex 요소들을 정렬합니다.
<br>
<br>
다음은 속성 값입니다.
<br>
<br>
<br>

- flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.(기본 값)
<br>
<br>
- flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
<br>
<br>
- center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
<br>
<br>
- baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
<br>
<br>
- stretch: 요소들을 컨테이너에 맞도록 늘립니다.

<br>
<br>
<br>

```css
.con p:nth-child(3){
	font-size:32px;
}		
.container1{
	display:flex;
	align-items: flex-start;
}
		
.container2{
	display:flex;
	align-items: flex-end;
}
		
.container3{
	display:flex;
	align-items: center;
}

		
.container4{
	display:flex;
	align-items: baseline;
}
		
.container5{
	display:flex;
	align-items: stretch;
}
```

<br>
<br>
<br>

![image](/image/RW_image/RW_image_08.png)

<br>
<br>

## FLEX-WRAP

<br>
<br>
flex-wrap은 flex 요소들을 한 줄 또는 여러 줄에 걸쳐 정렬합니다!
<br>
<br>
속성 값은 다음과 같습니다.
<br>
<br>
<br>

- nowrap: 모든 요소들을 한 줄에 정렬합니다.(기본값)
<br>
<br>
- wrap: 요소들을 여러 줄에 걸쳐 정렬합니다.
<br>
<br>
- wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.
<br>
<br>
<br>

```css
.con p{
	flex-basis:50%; /* flex요소의 너비를 부모의 50%로 설정 */
}		
.container1{
	display:flex;
	flex-wrap:wrap;
}
		
.container2{
	display:flex;
	flex-wrap:nowrap;
}
		
.container3{
	display:flex;
	flex-wrap:wrap-reverse;
}
```

<br>
<br>
<br>

![image](/image/RW_image/RW_image_09.png)

<br>
<br>

## ALIGN-CONTENT

<br>
<br>
<br>
align-center 속성은 세로축 상에 여분 공간이 있는 경우, 줄 사이의 간격을 조절합니다.
<br>
<br>
<br>

- flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
<br>
<br>
- flex-end: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
<br>
<br>
- center: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
<br>
<br>
- space-between: 여러 줄들 사이에 동일한 간격을 둡니다.
<br>
<br>
- space-around: 여러 줄들 주위에 동일한 간격을 둡니다.
<br>
<br>
- stretch: 여러 줄들을 컨테이너에 맞도록 늘립니다.

<br>
<br>
<br>

```css
.con p{
	flex-basis:50%; /* flex요소의 너비를 부모의 50%로 설정 */
}		
.container1{
	display:flex;
	flex-wrap:wrap;
	align-content: flex-start;
}
		
.container2{
	display:flex;
	flex-wrap:wrap;
	align-content: flex-end;
}
		
.container3{
	display:flex;
	flex-wrap:wrap;
	align-content: center;
}

		
.container4{
	display:flex;
	flex-wrap:wrap;
	align-content: space-between;
}
		
.container5{
	display:flex;
	flex-wrap:wrap;
	align-content: space-around;
}

.container6{
	display:flex;
	flex-wrap:wrap;
	align-content: stretch;
}
```

<br>
<br>
<br>

![image](/image/RW_image/RW_image_10.png)
