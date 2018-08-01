$(function(){
	$('.nav li').click(function(e){
		e.preventDefault()
		$('.nav li').removeClass('on');
		$(this).addClass('on');
		
		var href=$(this).attr('id'); //id 값 가져옴
		//가져온 id의 위치를 스크롤 left 값으로 변경(stop은 똑같은 것 클릭 계속해도 한번만 실행되게함)
		$('html,body').stop().animate({scrollLeft:$(href).offset().left},500,'easeOutBounce')
	})
	
	$(window).scroll(function(){
		
		var winw=$(window).width();//window 가로
		var scrL=$(window).scrollLeft(); //스크롤 가로
		for(var i=0;i<5;i++){
			if(scrL>=winw*i && scrL<winw*(i+1)){
				$('.nav li').removeClass('on');
				$('.nav li').eq(i).addClass('on');
			}
		}
		
	})
	$('section').mousewheel(function(event,delta){
		if(delta>0){ //delta가 0보다 크면 마우스 휠을 위로 올리고 있는것임
			var next=$(this).next('section').offset().left //다음 섹션의 left
			//easeOutBounce는 easing 효과
			$('html,body').stop().animate({scrollLeft:next},500,'easeOutBounce')
			
			
		}else if(delta<0){ //delta가 0보다 작으면 마우스 휠을 위로 올리고 있는것임
			var prev=$(this).prev('section').offset().left //이전 섹션의 left
			$('html,body').stop().animate({scrollLeft:prev},500,'easeOutBounce')
		}
	})
})