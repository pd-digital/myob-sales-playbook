$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/states/)) return false

  var CLIENT_TASK_KEY = 'client-task'

  MSP.EnableSaveButtons()
  MSP.ClientInfo().init()

  function getQueryString() {
    return
  }

  // TODO: COME ON!
  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    keys = keys.map(function(key) {
      return key.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-')
    })
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/questions')

    // TODO: SOME Cray cray tab stuff
    var originalNextHref = $('.next').attr('href')
    $('.product-row').hide()
    $('.product-row--essentials').show()
    $('[data-product="essentials"]').addClass('active')
    $('.next').attr('href', originalNextHref + '/essentials?client_tasks=' + keys.join(','))

    $('.tab__item').on('click', function() {
      var productName = $(this).data('product')
      $('.product-row').hide()
      $('.product-row--' + productName).show()
      $('[data-product]').removeClass('active')
      $(this).addClass('active')
      $('.next').attr('href', originalNextHref + '/' + $(this).data('product') + '?client_tasks=' + keys.join(','))
    })
  }
})
