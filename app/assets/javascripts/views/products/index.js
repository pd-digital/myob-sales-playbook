$(document).ready(function() {
  if (!window.location.pathname.match(/^\/products$/) && !window.location.pathname.match(/^\/products\/$/)) return false

  console.log('products')

  if (localStorage.getItem('topic')) {
    var keys = JSON.parse(localStorage.getItem('topic'))
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/products')
  }
})
