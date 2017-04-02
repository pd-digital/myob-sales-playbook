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

  $('#save-topic-states').on('click', function() {
    var data = { topics: [] }

    $('.topic').each(function(index, topic) {
      data.topics.push({
        key: $(topic).attr('data-key'),
        name: $(topic).attr('data-name'),
        currentState: $(topic).find('[data-current-state]').val(),
        futureState: $(topic).find('[data-future-state]').val()
      })
    })

    $.ajax({
      url: '/topics/states',
      method: 'PUT',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
})
