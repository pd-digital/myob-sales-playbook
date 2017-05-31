$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/states/)) return false

  var CLIENT_TASK_KEY = 'client-task'

  MSP.EnableSaveButtons()
  MSP.ClientInfo().init()

  // TODO: COME ON!
  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    keys = keys.map(function(key) {
      return key.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-')
    })
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/questions')

    var originalNextHref = $('.next').attr('href')
    $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/products')
  }

  // TODO: SOME Cray cray tab stuff
  $('.product-row').hide()
  $('.product-row--essentials').show()
  $('.tab__item').on('click', function() {
    var productName = $(this).data('product')
    $('.product-row').hide()
    $('.product-row--' + productName).show()
  })
})
