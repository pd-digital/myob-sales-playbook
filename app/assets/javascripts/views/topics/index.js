$(document).ready(function() {
  if (!window.location.pathname.match(/^\/topics$/) && !window.location.pathname.match(/^\/topics\/$/)) return false

  var KEY = 'topic'
  console.log(KEY)

  MSP.Toggler().init({ count: 3, key: KEY })
})
