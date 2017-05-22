$(document).ready(function() {
  if (!window.location.pathname.match(/^\/call_types_and_campaigns$/) && !window.location.pathname.match(/^\/call_types_and_campaigns\/$/)) return false

  var KEY = 'call-type-or-campaign'
  console.log(KEY)

  MSP.Toggler().init({ key: KEY })
  MSP.ClientInfo().init()
})
