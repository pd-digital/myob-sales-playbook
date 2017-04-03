$(document).ready(function() {
  if (!window.location.pathname.match(/^\/client_tasks$/) && !window.location.pathname.match(/^\/client_tasks\/$/)) return false

  var KEY = 'client-task'
  console.log(KEY)

  MSP.Toggler().init({ count: 3, key: KEY })
})
