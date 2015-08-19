$(function(){
    var walle = $.cookie("walle");
    var walle = {};
    
    if(walle['member1'] === 'Captured'){
        $("#memberA").text("Captured");
    }
    	

	//var header = $("#header");
	//var offset = header.offset();
	
		/*$(window).on('load scroll', function(){
			var winTop = $(this).scrollTop();
			
			if (winTop > offset.top) {
				header.addClass('fixed');
				//header.css("top", winTop + "px");
			} else {
				header.removeClass('fixed');
			}
		});*/
		
});
