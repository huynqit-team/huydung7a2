$(document).ready(function(){
	$(".out").click(function(){
		$('html,body').animate({scrollTop:$("#outsite").offset().top},1000,"easeIn");
		return false;
	});
	$(".ins").click(function(){
		$('html,body').animate({scrollTop:$("#myinside").offset().top},2000);
		return false;
	});
	$(".sto").click(function(){
		$('html,body').animate({scrollTop:$("#storage").offset().top},2000);
		return false;
	});
	
	$(window).scroll(function(){
		//console.log("ban vua quon chuot");
		//var vitri_inside=$('.about').offset();
		//console.log(vitri_inside);
		var vitri=$('html,body').scrollTop();
		console.log(vitri);
		if(vitri>=100)
		{
			$(".navbar-fixed-top").addClass('tienhoa');
		}
		else if(vitri<100)
		{
			$(".navbar-fixed-top").removeClass('tienhoa');
		}

	});
	
})