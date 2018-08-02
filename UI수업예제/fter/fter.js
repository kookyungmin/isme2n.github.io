$(function(){
	/*appentTo ����ϸ� ������ ���̹Ƿ� �ϳ� ������ ���ܳ��´�.*/
	$('.main').css({'left':'-25%'});
	
	$('.next').click(function(){
		nextMove();
	})
	
	$('.prev').click(function(){
		prevMove();
	})
	
	$('.main').mousewheel(function(event,delta){
		if(delta>0){ 
			nextMove();
		}else if(delta<0){ 
			prevMove();
		}
	})
	
	function prevMove(){
		$('.main').animate({'left':'-50%'},500,function(){
			$('.main li').first().appendTo('.main');
			$('.main').css({'left':'-25%'});
		});
	}
	function nextMove(){
		$('.main').animate({'left':'0%'},500,function(){
			$('.main li').last().prependTo('.main');
			$('.main').css({'left':'-25%'})
		});
	}
})