// TODO - step 1 here is to fix up the resource attributes to pass in
//        clearer data params, resource-name, resource-attr, resource-val

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

  var data = function(resource) {
    var data = {}
    data[resource.data('attr')] = resource.find(DATA_BODY_SELECTOR).val()
    return data
  }

  $(SAVE_BUTTON_SELECTOR).on('click', function() {
    var resource = $(this).parents(resourceSelector)

    $.ajax({
      url: url(resource),
      method: 'PUT',
      data: JSON.stringify(data(resource)),
      contentType: 'application/json; charset=utf-8',
      success: function(data) {
        console.log(data)
      }
    })
  })
}
