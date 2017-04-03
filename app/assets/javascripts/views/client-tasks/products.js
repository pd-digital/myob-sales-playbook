$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/products/)) return false

  var KEY = 'product'
  var CLIENT_TASK_KEY = 'client-task'
  var ORIGINAL_NEXT_HREF = $('.next').attr('href')
  var ORIGINAL_PREV_HREF = $('.prev').attr('href')
  var SAVE_CLIENT_BENEFIT_SELECTOR = '#save-client-benefits'
  console.log(KEY)

  MSP.Toggler().init({ key: KEY })

  $('.client-benefit').trumbowyg({
    btns: ['strong', 'em', 'unorderedList', 'orderedList'],
    autogrow: true
  })

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

  $(SAVE_CLIENT_BENEFIT_SELECTOR).on('click', function() {
    var data = { clientBenefits: [] }

    $('.client-benefit:visible').each(function(index, client_task) {

      if ($(client_task).data('id')) {
        data.clientBenefits.push({
          id: $(client_task).data('id'),
          productId: $(client_task).data('productId'),
          featureId: $(client_task).data('featureId'),
          benefits: $(client_task).val()
        })
      } else {
        data.clientBenefits.push({
          productId: $(client_task).data('productId'),
          featureId: $(client_task).data('featureId'),
          benefits: $(client_task).val()
        })
      }
    })

    $.ajax({
      url: '/client_tasks/products',
      method: 'PUT',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
})
