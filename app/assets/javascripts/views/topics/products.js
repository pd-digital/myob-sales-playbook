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
    if (localStorage.getItem(KEY)) {
      var activeToggle = $('[data-product].active')
      var product = activeToggle.data('product')
      $('.desc').hide()
      $('.' + product).show()
    }
  }


  // $('[data-toggle]').on('click', function() {
  //   $('[data-toggle]').removeClass('active')
  //   $(this).addClass('active')
  //   var toggle = $(this).data('toggle')
  //
  //   $('.desc').hide()
  //   $('.' + toggle).show()
  // })
  //
  // $('.desc').hide()
  // $('[data-toggle]').first().trigger('click')

  if (localStorage.getItem('topic')) {
    var keys = JSON.parse(localStorage.getItem('topic'))
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/states')
  }
})
