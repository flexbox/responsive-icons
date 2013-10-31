$(document).ready ->

  # Fetch data on the icon
  $("i").click ->
    element = $(this)

    $('.m-clipboard').addClass('is-active')
    $("#js-icon").html "&" + element.attr("entity-name")
    $("#js-name").html "<span>&</span>" + element.attr("entity-name")
    $("#js-hex").html element.attr("entity-hex")
    $("#js-class").html "." + element.attr("class")


  # Copy / Paste function
  $(".clipboard").click ->
    text = $(this).html()
    entity = new RegExp("<span>&amp;</span>")
    retour = $("#e-name").val()
    if entity.test(text) is true
      retour = text.replace("<span>&amp;</span>", "")
      retour = "&" + retour
    else
      retour = text
    window.prompt "Copy to clipboard : Ctrl+C", String(retour)

