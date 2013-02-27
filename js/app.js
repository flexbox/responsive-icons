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
			'.'+
			$(this).attr("class")
			);
	}); 

	$(".clipboard").click(function(){
		var texte = $(this).html();
		var entity = new RegExp('<span>&amp;</span>');
		//console.log(entity.test($(this).html()));
		var retour = $('#e-name').val();

		if (entity.test(texte) == true) {
			retour = texte.replace("<span>&amp;</span>","")
			retour = "&"+retour;
		}
		

		console.log(texte);
		window.prompt ("Copy to clipboard : Ctrl+C", String(retour));	
	});


});	