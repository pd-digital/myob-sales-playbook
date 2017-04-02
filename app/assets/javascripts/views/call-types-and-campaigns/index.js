$(document).ready(function() {
  if (!window.location.pathname.match(/\/call_types_and_campaigns$/) && !window.location.pathname.match(/\/call_types_and_campaigns\/$/)) return false

  var KEY = 'call-type'
  var KEY2 = 'campaign'
  console.log(KEY, KEY2)

  MSP.Toggler().init({ key: KEY })
  MSP.Toggler().init({ key: KEY2 })
})
