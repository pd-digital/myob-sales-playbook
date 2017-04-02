$(document).ready(function() {
  if (!window.location.pathname.match(/\/topics\/.*\/questions/)) return false

  console.log('questions')

  if (localStorage.getItem('topic')) {
    var keys = JSON.parse(localStorage.getItem('topic'))
    var originalNextHref = $('.next').attr('href')
    $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/states')
  }
})
