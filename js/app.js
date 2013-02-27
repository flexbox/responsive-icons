$(document).ready(function(){

	/*console.log($(".star-black"));*/

	$("i").click(function(){
		$("#e-icon").html(
				'&'+
				$(this).attr("entity-name")
			);
		$("#e-name").html(
				'<span>&</span>'+
				$(this).attr("entity-name")
			);
		$("#e-hex").html($(this).attr("entity-hex"));
		$("#e-class").html(
			'<span>.</span>'+
			$(this).attr("class")
			);

	}); 

});	