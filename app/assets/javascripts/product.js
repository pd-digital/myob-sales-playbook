$(document).ready(function() {
  if (!window.location.href.match(/\/products/)) return false

  $('[data-toggle]').on('click', function() {
    $('[data-toggle]').removeClass('active')
    $(this).addClass('active')
    var toggle = $(this).data('toggle')

    $('.desc').hide()
    $('.' + toggle).show()
  })

  $('.desc').hide()
  $('[data-toggle]').first().trigger('click')
})
