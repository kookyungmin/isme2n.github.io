$(function(){
	/* href를 가져와 구현 
		$('.nav li a').click(function(e){
		e.preventDefault();
		var href=$(this).attr('href');
		$('.content li').removeClass('on');
		$(href).addClass('on');
	})*/
	
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delaydelay: 2500,
			disableOnInteraction: false,
		 },
	})
	//swiper change 메서드	
	swiper.on('slideChange', function () {
		var activeIdx=swiper.activeIndex
		//alert(activeIdx)	
		$('.nav li').removeClass('on')
		$('.nav li').eq(activeIdx).addClass('on')
		$('.content2 li').fadeOut()
		$('.content2 li').eq(activeIdx).fadeIn()
	});
	
	// 클릭했을 때
	$('.nav li').click(function(){
		var idx=$(this).index()
		swiper.slideTo(idx,500,false) //슬라이드 움직임
		$('.nav li').removeClass('on')
		$(this).addClass('on')
		$('.content2 li').fadeOut()
		$('.content2 li').eq(idx).fadeIn()
	})
})