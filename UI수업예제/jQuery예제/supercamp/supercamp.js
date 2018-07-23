$(function(){
	var swiper1 = new Swiper('.swiper1', {
		spaceBetween: 30,
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination1',
			clickable: true,
		},
		autoplay: { 
			delay: 5000,
			disableOnInteraction: false,
		}
    });
    var swiper2 = new Swiper('.swiper2', {
		spaceBetween: 30,
		pagination: {
		el: '.swiper-pagination2',
		clickable: true,
		},
		autoplay: { /* 자동 실행 */
			delay: 5000,
			disableOnInteraction: false,
		}
    });
})