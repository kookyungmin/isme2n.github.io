$(function(){
	var idx2=0;
	$('.thema').click(function(){
		$(this).toggleClass('on');
	})
	$('.thema li').click(function(){
		var idx=$(this).index()
		$('.bg').css({'background-image':'url(bg'+(idx+1)+'.jpg)'})
	})
	$('.main1 li').click(function(){
		var idx=$(this).index()
		$('.main1 li').removeClass('on')
		$(this).addClass('on')
		$('.main1 img').attr({'src':'tab1-'+(idx+1)+'.jpg'})
	})
	$('.main2 li').click(function(){
		var idx=$(this).index()
		$('.main2 li').removeClass('on')
		$(this).addClass('on')
		$('.main2 img').attr({'src':'tab2-'+(idx+1)+'.jpg'})
	})
	$('.main3 li').click(function(){
		idx2=$(this).index()
		$('.main3 li').removeClass('on')
		$(this).addClass('on')
		$('.main3>img').attr({'src':'slider'+(idx2+1)+'.jpg'})
	})
	$('.main3 .btnNext').click(function(){
		if(idx2<3){
			idx2=idx2+1;
			$('.main3>img').attr({'src':'slider'+(idx2+1)+'.jpg'})
			$('.main3 li').removeClass('on')
			$('.main3 li:nth-child('+(idx2+1)+')').addClass('on')
		}else{
			idx2=0;
			$('.main3>img').attr({'src':'slider'+(idx2+1)+'.jpg'})
			$('.main3 li').removeClass('on')
			$('.main3 li:nth-child('+(idx2+1)+')').addClass('on')
		}
	})
	$('.main3 .btnPrev').click(function(){
		if(idx2>0){
			idx2=idx2-1;
			$('.main3>img').attr({'src':'slider'+(idx2+1)+'.jpg'})
			$('.main3 li').removeClass('on')
			$('.main3 li:nth-child('+(idx2+1)+')').addClass('on')
		}else{
			idx2=3;
			$('.main3>img').attr({'src':'slider'+(idx2+1)+'.jpg'})
			$('.main3 li').removeClass('on')
			$('.main3 li:nth-child('+(idx2+1)+')').addClass('on')
		}
	})
	
	// Quick Search
	var timer=setInterval(move,20)
	var mleft=-156 //처음 left값
	
	$('.Quick ul').css({'left':'mleft'})
	
	function move(){
			mleft-=2;
			$('.Quick ul').css({'left':mleft})
			if(mleft==-158){ //move 실행 처음
				$('.Quick li').first().appendTo('.Quick ul'); //처음을 ul 마지막에 붙임
			}else if(mleft<=-312){ //두번째를 다시 처음으로 만듬
				mleft=-156
			}
	}
	$('.Quick ul').mouseenter(function(){
		clearInterval(timer)
	})
	$('.Quick ul').mouseleave(function(){
		timer=setInterval(move,20)
	})
	
	$('.Quick .btnPrev').click(function(){
		clearInterval(timer)
		$('.Quick li').first().appendTo('.Quick ul') //처음이 ul 마지막에 붙임	
	})
	$('.Quick .btnNext').click(function(){
		clearInterval(timer)
		$('.Quick li').last().prependTo('.Quick ul') //마지막이 ul 처음에 붙임
	})
	
	
	
	
	
	
	
	
	
	
	
	
})