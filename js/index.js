$(function(){
	$(".ulLeft li").hover(function(){
		$(this).children(".children").show()
	},function(){
		$(this).children(".children").hide()
	})
})
