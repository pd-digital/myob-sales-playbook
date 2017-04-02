$(document).ready(function() {
  if (!window.location.pathname.match(/\/topics\/.*\/questions/)) return false

  console.log('questions')

  if (localStorage.getItem('topic')) {
    var keys = JSON.parse(localStorage.getItem('topic'))
    var originalNextHref = $('.next').attr('href')
    $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/states')
  }

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
      url: '/topics/questions',
      method: 'PUT',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
})
