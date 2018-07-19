$(function(){
	var count=0	
	$('.next').click(function(e){
		e.preventDefault
		if(count<5){
			count=count+1 
			//alert(count)로 확인
			$('section').animate({'left':'-=440px'})
			$('.prev').css({'display':'block'})
		}else{
			$('section').animate({'left':'160px'})
			count=0
			$('.prev').css({'display':'none'})
		}
	})
	$('.prev').click(function(e){
		e.preventDefault
		if(count>0){
			count=count-1 
			//alert(count)로 확인
			$('section').animate({'left':'+=440px'})
			if(count==0)
				$('.prev').css({'display':'none'})
		}
	})
	
})