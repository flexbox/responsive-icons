$ ->

  # Fetch data on the icon
  $('i').click ->
    target = $(@)

    $('.m-clipboard').addClass('is-active')
    $('#js-icon').html '&' + target.attr('entity-name')
    $('#js-name').html '<span>&</span>' + target.attr('entity-name')
    $('#js-hex').html target.attr('entity-hex')
    $('#js-class').html '.' + target.attr('class')


  # Copy / Paste function
  $('.clipboard').click ->
    text = $(@).html()
    entity = new RegExp('<span>&amp;</span>')
    content = $('#e-name').val()
    if entity.test(text) is true
      content = text.replace('<span>&amp;</span>', '')
      content = '&' + content
    else
      content = text
    window.prompt 'Copy to clipboard : Ctrl+C', String(content)

