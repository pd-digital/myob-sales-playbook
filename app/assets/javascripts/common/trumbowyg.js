$(document).ready(function() {
  if ($('[data-trumbowyg]').length) {
    $('[data-trumbowyg]').trumbowyg({
      btns: ['strong', 'em', 'unorderedList', 'orderedList'],
      autogrow: true
    })
  }
})
