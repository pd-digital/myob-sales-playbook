$(document).ready(function() {
  var keys = [
    { name: 'team', count: 1 },
    { name: 'call-type', count: 1 },
    { name: 'campaign', count: 1 },
    { name: 'industry', count: 1 },
    { name: 'topic', count: 3 }
  ]

  keys.forEach(function(key) {
    MSP.Toggler().init({
      key: key.name,
      count: key.count
    })
  })

  $('#save-topic-questions').on('click', function() {
    var data = { topics: [] }

    $('.topic').each(function(index, topic) {
      data.topics.push({
        key: $(topic).attr('data-key'),
        name: $(topic).attr('data-name'),
        questions: $(topic).find('[data-questions]').val()
      })
    })

    $.ajax({
      url: '/topics/update',
      method: 'PUT',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })

    console.log('good start', data)
  })

  if (window.location.pathname.match(/topics.*questions/)) {
    if (localStorage.getItem('topic')) {
      var keys = JSON.parse(localStorage.getItem('topic'))
      var originalNextHref = $('.next').attr('href')
      $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/states')
    }
  }

  if (window.location.pathname.match(/topics.*states/)) {
    if (localStorage.getItem('topic')) {
      var keys = JSON.parse(localStorage.getItem('topic'))
      var originalPrevHref = $('.prev').attr('href')
      $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/questions')

      var originalNextHref = $('.next').attr('href')
      $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/products')
    }
  }

  if (window.location.pathname.match(/topics.*products/)) {
    if (localStorage.getItem('topic')) {
      var keys = JSON.parse(localStorage.getItem('topic'))
      var originalPrevHref = $('.prev').attr('href')
      $('.prev').attr('href', originalPrevHref + '/' + keys.join(',') + '/states')
    }
  }
})
