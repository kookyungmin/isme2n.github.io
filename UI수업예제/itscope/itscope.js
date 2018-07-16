$(function(){
  $('.level1').click(function(){
    $(this).find('.level2').slideDown(2000)
  })
  
  $('.level1').mouseleave(function(){
     $(this).find('.level2').slideUp(2000)
    //$(this).children('.level2').slideDown()
  })
  
})
