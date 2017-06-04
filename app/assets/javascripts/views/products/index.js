$(document).ready(function() {
  if (!window.location.pathname.match(/^\/products\/.*$/)) return false

  var CLIENT_TASK_KEY = 'client-task'

  // TODO: This is just repeated everywhere...
  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    keys = keys.map(function(key) {
      return key.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-')
    })
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/states')
  }
})
