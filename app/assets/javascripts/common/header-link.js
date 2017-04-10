$(document).ready(function() {
  $('[data-header-link]').on('click', function(e) {
    e.preventDefault()

    localStorage.clear()
    window.location = $(this).attr('href')
  })
})
