$(document).ready(function() {
  if (!window.location.pathname.match(/^\/topics$/) && !window.location.pathname.match(/^\/topics\/$/)) return false

  var KEY = 'topic'
  console.log(KEY)

  MSP.Toggler().init({ count: 3, key: KEY })

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
  })
})
