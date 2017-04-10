$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/states/)) return false

  console.log('states')

  var CLIENT_TASK_KEY = 'client-task'

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

  $('[data-current-state], [data-future-state]').trumbowyg({
    btns: ['strong', 'em', 'unorderedList', 'orderedList'],
    autogrow: true
  })

  $('#save-client-task-states').on('click', function() {
    var data = { clientTasks: [] }

    $('.client-task').each(function(index, clientTask) {
      data.clientTasks.push({
        key: $(clientTask).attr('data-key'),
        name: $(clientTask).attr('data-name'),
        currentState: $(clientTask).find('[data-current-state]').val(),
        futureState: $(clientTask).find('[data-future-state]').val()
      })
    })

    $.ajax({
      url: '/client_tasks/states',
      method: 'PUT',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
})
