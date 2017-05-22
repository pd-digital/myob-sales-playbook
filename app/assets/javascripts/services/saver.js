MSP.EnableSaveButtons = function(options) {
  var SAVE_BUTTON_SELECTOR = '[data-action="save"]'
  var DATA_BODY_SELECTOR = '[data-questions]'
  var key = options.key
  var resourceSelector = '[' + key + ']'
  var pluralResourceName = key.replace(/data-/, '')

  var url = function(resource) {
    var url = []
    url.push(key.replace(/data-/, '').replace(/-/, '_'))
    url.push(resource.attr('data-id'))
    return '/' + url.join('/')
  }

  $(SAVE_BUTTON_SELECTOR).on('click', function() {
    var resource = $(this).parents(resourceSelector)

    $.ajax({
      url: url(resource),
      method: 'PUT',
      data: JSON.stringify({ data: resource.find(DATA_BODY_SELECTOR).val() }),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
}
