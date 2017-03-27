$(document).ready(function() {
  MSP.Toggler().init({
    btnSelector: '.btn-call-type',
    dataKey: 'data-call-type',
    localStorageKey: 'call-type'
  })

  MSP.Toggler().init({
    btnSelector: '.btn-campaign',
    dataKey: 'data-campaign',
    localStorageKey: 'campaign'
  })
})
