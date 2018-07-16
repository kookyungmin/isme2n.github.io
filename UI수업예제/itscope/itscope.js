$(function(){
  $('.level1').click(function(){
    $('.level2').slideDown(2000)
  })
  $('.level1').mouseleave(function(){
    $('.level2').slideUp(2000)
  })
  
})
