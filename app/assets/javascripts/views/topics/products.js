$(document).ready(function() {
  if (!window.location.pathname.match(/\/topics\/.*\/products/)) return false

  var KEY = 'product'
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
  }

  if (localStorage.getItem('topic')) {
    var keys = JSON.parse(localStorage.getItem('topic'))
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/states')
  }
})
