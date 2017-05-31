$(document).ready(function() {
  if (!window.location.pathname.match(/^\/industries$/) && !window.location.pathname.match(/^\/industries\/$/)) return false

  MSP.Toggler().init({ key: 'client-type' })
  MSP.ClientInfo().init()
})
