$(function(){
	$('.nav li a').click(function(e){
		e.preventDefault();
		var href=$(this).attr('href');
		alert(href)
		$('.content li').removeClass('on');
		$(href).addClass('on');
	})
})
