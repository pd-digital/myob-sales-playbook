$(document).ready(function() {
  if (!window.location.pathname.match(/\/client_tasks\/.*\/states/)) return false

  var CLIENT_TASK_KEY = 'client-task'

  MSP.EnableSaveButtons()
  MSP.ClientInfo().init()

  // TODO: COME ON!
  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    keys = keys.map(function(key) {
      return key.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-')
    })
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/questions')

    var originalNextHref = $('.next').attr('href')
    $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/products')
  }
})
