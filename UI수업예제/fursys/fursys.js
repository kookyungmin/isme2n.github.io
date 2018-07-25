$(function(){
	var swiper = new Swiper('.swiper-container', {
		direction: 'vertical',
		mousewheel: true,
		autoplay: {
			delaydelay: 2500,
			disableOnInteraction: false,
		},
    });
	
	//swiper change 메서드
	swiper.on('slideChange', function () {
		var activeIdx=swiper.activeIndex
		//alert(activeIdx)	
		$('.nav li').removeClass('on')
		$('.nav li').eq(activeIdx).addClass('on')
	});
	
	$('.nav li').mouseenter(function(){
		var idx=$(this).index()
		swiper.slideTo(idx,500,false) //슬라이드 움직임
		$('.nav li').removeClass('on')
		$(this).addClass('on')
	})
})