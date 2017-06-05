$(document).ready(function() {
  var pathname = window.location.pathname
  if (!pathname.match(/^\/client_tasks$/) && !pathname.match(/^\/client_tasks\/$/)) return false

  MSP.Toggler().init({ count: 3, key: 'client-task' })
  MSP.EnableSaveButtons()

  MSP.ClientInfo().init()
})
