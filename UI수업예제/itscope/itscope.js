$(function(){
  $('.level1').click(function(){
    $(this).find('.level2').slideDown(1000)
    //$(this).children('.level2').slideDown()
  })
  
  $('.level1').mouseleave(function(){
     $(this).find('.level2').slideUp(1000)
  })
  
})
