var defer = Turbolinks.defer
var dispatch = Turbolinks.dispatch

var handleEvent = function(eventName, handler) {
  document.addEventListener(eventName, handler, false)
}

var translateEvent = function(sommat) {
  var handler = function(event) {
    var event = dispatch(sommat.to, { target: event.target, cancelable: event.cancelable, data: event.data })
    if (event.defaultPrevented) {
      event.preventDefault()
    }
  }
  handleEvent(sommat.from, handler)
}

translateEvent({ from: "turbolinks:click", to: "page:before-change" })
translateEvent({ from: "turbolinks:request-start", to: "page:fetch" })
translateEvent({ from: "turbolinks:request-end", to: "page:receive" })
translateEvent({ from: "turbolinks:before-cache", to: "page:before-unload" })
translateEvent({ from: "turbolinks:render", to: "page:update" })
translateEvent({ from: "turbolinks:load", to: "page:change" })
translateEvent({ from: "turbolinks:load", to: "page:update" })

var loaded = false
handleEvent("DOMContentLoaded", function() {
  defer(function() {
    loaded = true
  })
})
handleEvent("turbolinks:load", function() {
  if (loaded)
    dispatch("page:load")
})

if (jQuery !== null) {
  jQuery(document).on("ajaxSuccess", function(event, xhr, settings) {
    if (jQuery.trim(xhr.responseText).length > 0) {
      dispatch("page:update")
    }
  })
}
