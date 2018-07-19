$(function(){
	$('.menu1 li a').click(function(e){ //클릭하면
		e.preventDefault() //a를 링크로 이동안함
		var href
		href=this.getAttribute('href') //.menu1 li a의 href 속성을 가져옴
		$('.main1 img').attr({'src':href}) //.main1 img의 src 속성을 href로 바꿈
		$('.menu1 li a').removeClass('on') //클래스 제거
		$(this).addClass('on')  // 클래스를 on으로 지정(addClass는 무조건 class 가오므로 .on으로 안해도됨
	})
	$('#con1').css({'display':'block'})
	$('.menu2 li a').click(function(e){ //클릭 이벤트가 발생했을 때
		$('.menu2 a').removeClass('on2') 
		$(this).addClass('on2')
		e.preventDefault() //a를 링크로 이동안함
		$('.main2 li').css({'display':'none'})
		var href2=this.getAttribute('href')
		alert(href)
		$(href2).css({'display':'block'})
	
		
		
	})
})
