$(function(){
  $('.level1').click(function(){
    $(this).$('.level2').slideDown(2000)
  })
  
  $('.level1').mouseleave(function(){
     $(this).$('.level2').slideUp(2000)
  })
  
})
