$(function(){
	var menuflag=0;
	var loginflag=0;
	var conflag1=0;
	var conflag2=0;
	var conflag3=0;
	$('.menubt').click(function(){
		menuflag=!menuflag;
		if(menuflag==1){
			$('.navbg').slideDown()
		}else{
			$('.navbg').slideUp()
		}
	})
	$('.loginbt').click(function(){
		loginflag=!loginflag;
		if(loginflag==1){
			$('.loginbg').slideDown()
		}else{
			$('.loginbg').slideUp()
		}
	})
	//버튼을 누르면 모든 content가 동시에 움직이므로 탐색을 해야한다.
	$('.content>button').click(function(){
		var idx=$(this).attr('id')
		if(idx==1){
			conflag1=!conflag1;
		}else if(idx==2){
			conflag2=!conflag2;
		}else if(idx==3){
			conflag3=!conflag3;
		}
		if((idx==1&&conflag1==1)||(idx==2&&conflag2==1)||(idx==3&&conflag3==1))
			$(this).next().slideDown() //button 옆을 슬라이드다운
		else{
			$(this).next().slideUp()
		}
	})
	
	//탐색을 이용!
	$('.size li a').click(function(e){
		e.preventDefault()
		$('.size li a').removeClass('on')
		$(this).addClass('on')
		$('.shoesdetail>button').removeClass('on')
		$(this).closest('.size').next().addClass('on')
	})
})