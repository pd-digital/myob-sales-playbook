$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/questions/)) return false

  console.log('questions')
  var CLIENT_TASK_KEY = 'client-task'
  var SAVE_CLIENT_TASK_SELECTOR = '#save-client-task-questions'

  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    var originalNextHref = $('.next').attr('href')
    $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/states')
  }

  $('[data-questions]').froalaEditor({
    toolbarButtons: ['bold', 'italic', 'formatOL', 'formatUL'],
    toolbarButtonsMD: ['bold', 'italic', 'formatOL', 'formatUL'],
    toolbarButtonsSM: ['bold', 'italic', 'formatOL', 'formatUL'],
    toolbarButtonsXS: ['bold', 'italic', 'formatOL', 'formatUL']
  })

  $(SAVE_CLIENT_TASK_SELECTOR).on('click', function() {
    var data = { clientTasks: [] }

    $('.client-task').each(function(index, client_task) {
      data.clientTasks.push({
        key: $(client_task).attr('data-key'),
        name: $(client_task).attr('data-name'),
        questions: $(client_task).find('[data-questions]').val()
      })
    })

    $.ajax({
      url: '/client_tasks/questions',
      method: 'PUT',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
})
