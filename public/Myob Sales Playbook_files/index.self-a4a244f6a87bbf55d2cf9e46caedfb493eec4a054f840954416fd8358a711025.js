$(document).ready(function() {
  var pathname = window.location.pathname
  if (!pathname.match(/^\/client_tasks$/) && !pathname.match(/^\/client_tasks\/$/)) return false

  var KEY = 'client-task'
  console.log(KEY)

  MSP.Toggler().init({ count: 3, key: KEY })
  MSP.ClientInfo().init()
})
