$(function(){
	$('.nav li a').click(function(e){
		e.preventDefault();
		var href=this.getAttribute('href');
		alert(this)
		$('.content li').removeClass('on');
		$(href).addClass('on');
	})
})
