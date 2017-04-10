$(document).ready(function() {
  if (!window.location.pathname.match(/^\//)) return false

  var KEY = 'team'

  MSP.Toggler().init({ key: KEY })
})
