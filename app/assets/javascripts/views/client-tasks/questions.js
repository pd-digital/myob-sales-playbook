$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/questions/)) return false

  var CLIENT_TASK_KEY = 'client-task'
  var SAVE_CLIENT_TASK_SELECTOR = '#save-client-task-questions'

  MSP.ClientInfo().init()
  MSP.EnableSaveButtons({
    key: 'data-client-tasks'
  })

  // TODO - this is NOT part of the toggler anymore...
  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    keys = keys.map(function(key) {
      return key.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-')
    })
    var originalNextHref = $('.next').attr('href')
    $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/states')
  }
})
