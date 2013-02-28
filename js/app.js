$(document).ready(function(){

	/* Fetch data on the icon ----------------- */
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

	/* Copy / Paste function ----------------- */
	$(".clipboard").click(function(){
		//console.log(entity.test($(this).html()));
		var texte = $(this).html();
		var entity = new RegExp('<span>&amp;</span>');
		var retour = $('#e-name').val();

		if (entity.test(texte) == true) {
			retour = texte.replace("<span>&amp;</span>","")
			retour = "&"+retour;
		} else {
			retour = texte;
		}

		console.log(texte);
		window.prompt ("Copy to clipboard : Ctrl+C", String(retour));	
	});


});	