$(function(){
	
	$('.button li:nth-child(1)').click(function(){
		main_fade_Out()
		con1_fade_In()
	})
	$('.button li:nth-child(2)').click(function(){
		main_fade_Out()
		con2_fade_In()
	})
	$('.con1 .close').click(function(){
		main_fade_In()
		con1_fade_Out()
	})
	$('.con2 .close').click(function(){
		main_fade_In()
		con2_fade_Out()
	})
	//main 없앰
	function main_fade_Out (){
		$('.main').animate({'top':'100px','opacity':'0'},800)
		$('.button').animate({'top':'700px','opacity':'0'},800)
		$('.img').animate({'right':'-25%'},800)	
	}
	//main 나타냄
	function main_fade_In (){
		$('.main').animate({'top':'250px','opacity':'1'},800)
		$('.button').animate({'top':'550px','opacity':'1'},800)
		$('.img').animate({'right':'-10%'},800)	
	}
	//con1 나타냄
	function con1_fade_In(){
		$('.con1 span').css({'display':'block'})
		draw_line('.con1')
	}
	//con1 없앰
	function con1_fade_Out(){
		fade_line('.con1')
	}
	//con2 나타냄
	function con2_fade_In(){
			$('.con2').slideDown(1000)
	}
	//con2 없앰
	function con2_fade_Out(){
			$('.con2').slideUp()
	}
	//테두리 그리고 나타냄
	function draw_line(box){
		$(box+' span:nth-child(1)').animate({'width':'100%'},800,
		function(){
			$(box+' span:nth-child(2)').animate({'height':'100%'},800,
				function(){
					$(box+' span:nth-child(3)').animate({'width':'100%'},800,		function(){
							$(box+' span:nth-child(4)').animate({'height':'100%'},800,
							function(){
								$('.con1-img').css({'display':'block'})
							})
					})
				})
		})
	}
	//테두리 없앰
	function fade_line(box){
		$(box+' span:nth-child(4)').animate({'height':'0'},100,
		function(){
			$(box+' span:nth-child(3)').animate({'width':'0'},100,
				function(){
					$(box+' span:nth-child(2)').animate({'height':'0'},100,		function(){
							$(box+' span:nth-child(1)').animate({'width':'0'})
					})
				})
		})
		$('.con1-img').css({'display':'none'})
	}
})
