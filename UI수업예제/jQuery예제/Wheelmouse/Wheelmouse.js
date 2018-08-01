$(function(){
	$('.nav li').click(function(){
		$('.nav li').removeClass('on');
		$(this).addClass('on');
		
		var href=$(this).attr('id'); //id 값 가져옴
		
		//가져온 id의 위치를 스크롤 탑으로 변경(stop은 똑같은 것 클릭 계속해도 한번만 실행되게함)
		$('html,body').stop().animate({scrollTop:$(href).offset().top},500,'easeOutBounce')
	})
	$(window).scroll(function(){
		var winh=$(window).height();//window 높이
		var scrT=$(window).scrollTop(); //스크롤 높이
		//console.log(winh) 
		//console.log(scrT)
		for(var i=0;i<5;i++){
			if(scrT>=winh*i && scrT<winh*(i+1)){
				$('.nav li').removeClass('on');
				$('.nav li').eq(i).addClass('on');
			}
		}
		
	})
	$('section').mousewheel(function(event,delta){
		if(delta>0){ //delta가 0보다 크면 마우스 휠을 위로 올리고 있는것임
			var prev=$(this).prev('section').offset().top //이전 섹션의 top
			//easeOutBounce는 easing 효과
			$('html,body').stop().animate({scrollTop:prev},500,'easeOutBounce')
		}else if(delta<0){ //delta가 0보다 작으면 마우스 휠을 아래로 내리고 있는것임
			var next=$(this).next('section').offset().top //다음 섹션의 top
			$('html,body').stop().animate({scrollTop:next},500,'easeOutBounce')
		}
	})
})
