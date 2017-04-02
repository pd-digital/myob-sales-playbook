$(document).ready(function() {
  if (!window.location.pathname.match(/\/topics\/.*\/states/)) return false

  console.log('states')

  if (localStorage.getItem('topic')) {
    var keys = JSON.parse(localStorage.getItem('topic'))
    var originalPrevHref = $('.prev').attr('href')
    $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/questions')

    var originalNextHref = $('.next').attr('href')
    $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/products')
  }
})
