$(document).ready(function() {
  if (!window.location.pathname.match(/^\/$/) && !window.location.pathname.match(/\/teams\/$/)) return false

  var KEY = 'team'
  console.log(KEY)

  MSP.Toggler().init({ key: KEY })
})
