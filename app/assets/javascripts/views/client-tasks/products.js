$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/products/)) return false

  var KEY = 'product'
  var CLIENT_TASK_KEY = 'client-task'
  var ORIGINAL_NEXT_HREF = $('.next').attr('href')
  var ORIGINAL_PREV_HREF = $('.prev').attr('href')
  console.log(KEY)

  MSP.Toggler().init({ key: KEY })

  updateView()
  $('[data-product]').on('click', function() {
    setTimeout(function() { updateView() }, 0)
  })

  function updateView() {
    var activeToggle = null

    if (localStorage.getItem(KEY)) {
      activeToggle = $('[data-product].active')
    } else {
      activeToggle = $('[data-product]').first()
      activeToggle.addClass('active')
      localStorage.setItem(KEY, JSON.stringify([activeToggle.data('product')]))
    }
    var product = activeToggle.data('product')
    $('.desc').hide()
    $('.' + product).show()

    if (localStorage.getItem('product')) {
      var keys = JSON.parse(localStorage.getItem('product'))
      $('.next').attr('href', ORIGINAL_NEXT_HREF + '/' + keys.join(','))
    }
  }

  if (localStorage.getItem('product')) {
    var keys = JSON.parse(localStorage.getItem('product'))
    $('.prev').attr('href', ORIGINAL_NEXT_HREF + '/' + keys.join(','))
  }

  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    $('.prev').attr('href', ORIGINAL_PREV_HREF + '/' + keys.join(',') + '/states')
  }
})
