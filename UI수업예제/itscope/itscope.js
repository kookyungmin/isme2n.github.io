$(function(){
  $('.level1').click(function(){
     //현재 클릭한 것만 보이고 기존 메뉴는 slideUp
    $('.level2).stop().slideUp(500) //stop은 반복 실행하면 그만두라는 
     //현재의 level2만 slideDown
    $(this).find('.level2').stop().slideDown(1000)
    //$(this).children('.level2').slideDown()
    
    
  })
 
  
})
