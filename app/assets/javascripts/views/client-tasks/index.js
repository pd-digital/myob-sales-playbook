$(document).ready(function() {
  var pathname = window.location.pathname
  if (!pathname.match(/^\/client_tasks$/) && !pathname.match(/^\/client_tasks\/$/)) return false

  var KEY = 'client-task'
  var SAVE_DISCOVERY_QUESTION_SELECTOR = '[data-action="save"]'
  console.log(KEY)

  MSP.Toggler().init({ count: 3, key: KEY })
  MSP.ClientInfo().init()

  // TODO - this seems to be repeated in a few spots now...
  $('[data-questions]').trumbowyg({
    btns: ['strong', 'em', 'unorderedList', 'orderedList'],
    autogrow: true
  })

  // TODO - this seems pretty generic too!
  $(SAVE_DISCOVERY_QUESTION_SELECTOR).on('click', function() {
    var discoveryQuestion = $(this).parents('[data-discovery-question]')

    $.ajax({
      url: '/discovery_questions/' + discoveryQuestion.attr('data-id'),
      method: 'PUT',
      data: JSON.stringify({ questions: discoveryQuestion.find('[data-questions]').val() }),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
})
