$(document).ready(function(){

	/* init analytics ------------------------- */
	$(document).analytics();

	/* Fetch data on the icon ----------------- */
	$("i").click(function(){
		$("#js-icon").html(
				'&'+
				$(this).attr("entity-name")
			);
		$("#js-name").html(
				'<span>&</span>'+
				$(this).attr("entity-name")
			);
		$("#js-hex").html(
				$(this).attr("entity-hex")
			);
		$("#js-class").html(
				'.'+
				$(this).attr("class")
			);
	});

	/* Copy / Paste function ----------------- */
	$(".clipboard").click(function(){
		var texte = $(this).html();
		var entity = new RegExp('<span>&amp;</span>');
		var retour = $('#e-name').val();

		if (entity.test(texte) == true) {
			retour = texte.replace("<span>&amp;</span>","")
			retour = "&"+retour;
		} else {
			retour = texte;
		}

		window.prompt ("Copy to clipboard : Ctrl+C", String(retour));
	});


});
