$(function(){
	/* href�� ������ ���� 
		$('.nav li a').click(function(e){
		e.preventDefault();
		var href=$(this).attr('href');
		$('.content li').removeClass('on');
		$(href).addClass('on');
	})*/
	/* index�� �̿��� ���� */
	$('.nav li').click(function(){
		var idx=$(this).index() /* �ε����� ������ */
		$('.content li').fadeOut()
		$('.content li').eq(idx).fadeIn()
		$('.content2 li').fadeOut()
		$('.content2 li').eq(idx).fadeIn()
		$('.nav li').removeClass('on')
		$(this).addClass('on')
	})
})