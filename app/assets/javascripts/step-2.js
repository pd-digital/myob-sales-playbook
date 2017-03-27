$(document).ready(function() {
  Toggler().init({
    btnSelector: '.btn-call-type',
    dataKey: 'data-call-type',
    localStorageKey: 'call-type'
  })

  Toggler().init({
    btnSelector: '.btn-campaign',
    dataKey: 'data-campaign',
    localStorageKey: 'campaign'
  })
})
