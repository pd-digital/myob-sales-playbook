$(document).ready(function() {
  if (!window.location.pathname.match(/^\/industries$/) && !window.location.pathname.match(/^\/industries\/$/) && !window.location.pathname.match(/^\/$/)) return false

  var KEY = 'client-type'
  console.log(KEY)

  MSP.Toggler().init({ key: KEY })
})
