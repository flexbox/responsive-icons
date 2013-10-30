$(document).ready ->

  # Fetch data on the icon
  $("i").click ->
    $('.m-clipboard').addClass('is-active')
    $("#js-icon").html "&" + $(this).attr("entity-name")
    $("#js-name").html "<span>&</span>" + $(this).attr("entity-name")
    $("#js-hex").html $(this).attr("entity-hex")
    $("#js-class").html "." + $(this).attr("class")


  # Copy / Paste function
  $(".clipboard").click ->
    texte = $(this).html()
    entity = new RegExp("<span>&amp;</span>")
    retour = $("#e-name").val()
    if entity.test(texte) is true
      retour = texte.replace("<span>&amp;</span>", "")
      retour = "&" + retour
    else
      retour = texte
    window.prompt "Copy to clipboard : Ctrl+C", String(retour)

