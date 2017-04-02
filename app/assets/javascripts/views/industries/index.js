$(document).ready(function() {
  if (!window.location.pathname.match(/^\/industries$/) && !window.location.pathname.match(/^\/industries\/$/)) return false

  var KEY = 'industry'
  console.log(KEY)

  MSP.Toggler().init({ key: KEY })
})
