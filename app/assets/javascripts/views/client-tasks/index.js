$(document).ready(function() {
  var pathname = window.location.pathname
  if (!pathname.match(/^\/client_tasks$/) && !pathname.match(/^\/client_tasks\/$/)) return false

  var KEY = 'client-task'

  MSP.Toggler().init({ count: 3, key: KEY })
  MSP.ClientInfo().init()
  MSP.EnableSaveButtons({
    key: 'data-discovery-questions'
  })
})
