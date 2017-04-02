$(document).ready(function() {
  if (!window.location.pathname.match(/^\/$/)) return false

  var KEY = 'team'
  console.log(KEY)

  MSP.Toggler().init({ key: KEY })
})
