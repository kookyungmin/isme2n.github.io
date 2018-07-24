$(function(){
	/* href를 가져와 구현 
		$('.nav li a').click(function(e){
		e.preventDefault();
		var href=$(this).attr('href');
		$('.content li').removeClass('on');
		$(href).addClass('on');
	})*/
	/* index를 이용해 구현 */
	$('.nav li').click(function(){
		var idx=$(this).index() /* 인덱스를 가져옴 */
		$('.content li').fadeOut()
		$('.content li').eq(idx).fadeIn()
		$('.content2 li').fadeOut()
		$('.content2 li').eq(idx).fadeIn()
		$('.nav li').removeClass('on')
		$(this).addClass('on')
	})
})