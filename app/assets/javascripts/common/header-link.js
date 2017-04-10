$(document).ready(function() {
  $('[data-reset-link]').on('click', function(e) {
    e.preventDefault()

    localStorage.clear()
    window.location = $(this).attr('href')
  })
})
