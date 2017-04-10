MSP.ClientInfo = function() {
  var $dataElem = $('[data-client-info]')
  var clientInformation = [
    {
      key: 'team',
      title: 'Team'
    },
    {
      key: 'call-type',
      title: 'Call type'
    },
    {
      key: 'campaign',
      title: 'Campaign'
    },
    {
      key: 'client-type',
      title: 'Industry'
    },
    {
      key: 'client-task',
      title: 'Needs'
    },
    {
      key: 'product',
      title: 'Product'
    }
  ]

  function generateHTML() {
    var output = []
    output.push('<ul>')
    clientInformation.forEach(function(info) {
      if (localStorage.getItem(info.key)) {
        output.push('<li class="client-info__list-title">' + info.title)
        output.push('<ul>')
        JSON.parse(localStorage.getItem(info.key)).forEach(function(item) {
          output.push('<li class="client-info__item">' + item + '</li>')
        })
        output.push('</ul>')
      }
      output.push('</li>')
    })
    output.push('</ul>')

    return output.join("")
  }

  return {
    init: function() {
      if (!$dataElem.length) return false

      $dataElem.html(generateHTML())
      return this
    }
  }
}
