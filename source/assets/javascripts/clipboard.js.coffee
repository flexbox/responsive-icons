class CopyPaste
  fetchData: () ->
    $('#js-content li').click ->
      target = $(@).find('i')

      $('.m-clipboard').addClass('is-active')
      $('#js-icon').html '&' + target.attr('entity-name')
      $('#js-name').html '<span>&</span>' + target.attr('entity-name')
      $('#js-hex').html target.attr('entity-hex')
      $('#js-class').html '.' + target.attr('class')

  clipboard: () ->
    $('.clipboard').click (event) ->
      event.preventDefault()
      text = $(@).html()
      entity = new RegExp('<span>&amp;</span>')
      content = $('#e-name').val()
      if entity.test(text) is true
        content = text.replace('<span>&amp;</span>', '')
        content = '&' + content
      else
        content = text
      window.prompt 'Copy to clipboard : Ctrl+C', String(content)

$ ->
  application = new CopyPaste
  application.fetchData()
  application.clipboard()
