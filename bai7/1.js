 $(function(){
 	var doCao=$(window).height();
 	$(".my-header").css({"height":doCao});
 	$(window).resize(function(event) {
 		/* Act on the event */
 		var doCao=$(window).height();
 		$(".my-header").css({"height":doCao});
 	});
 })  
 