$(document).ready(function() {
  if (!window.location.pathname.match(/^\/products\/.*$/)) return false

  console.log('products')

  var CLIENT_TASK_KEY = 'client-task'

  if (localStorage.getItem(CLIENT_TASK_KEY)) {
    var keys = JSON.parse(localStorage.getItem(CLIENT_TASK_KEY))
    keys = keys.map(function(key) {
      return key.toLowerCase().replace(/\s/g, '-').replace(/\//g, '-')
    })
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/products')
  }
})
