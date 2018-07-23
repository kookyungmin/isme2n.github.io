$(function(){
  $('.level1').click(function(){
    //현재 클릭한 것만 보이고 기존 메뉴는 slideUp
    
    $('.level2').stop().slideUp(500) //stop은 반복 실행하면 그만두라는 
     //현재의 level2만 slideDown
    $(this).find('.level2').stop().slideDown(500)
    //$(this).children('.level2').slideDown()
    var swiper = new Swiper('.swiper-container', {
				effect: 'fade', /* fade 효과 */
				pagination: { /* 슬라이드 밑에 동그라미 */
					el: '.swiper-pagination',
					clickable: true, /* 클릭했을 때 해당 위치로 슬라이동 이동 */
				},
				autoplay: { /* 자동 실행 */
					delay: 2500,
					disableOnInteraction: false,
				}
			});
    
  })
})
