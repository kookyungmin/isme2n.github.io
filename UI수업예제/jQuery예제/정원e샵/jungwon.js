 $(function(){	
	$(".nav").mCustomScrollbar({ })
	$(".nav li").click(function(){
		var id=this.getAttribute('id')
		$('.main>img').attr({'src':id})
		var cl=this.getAttribute('class')
		$('.submain img').attr({'src':cl})
		$('.nav li').css({'opacity':'0.5'})
		$(this).css({'opacity':'1'})
	})	
});