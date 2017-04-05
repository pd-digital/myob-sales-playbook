MSP.Toggler = function() {
  var togglesSelector = null
  var dataKey = null
  var localStorageKey = null
  var nextBtnSelector = '.next'
  var count = null
  var validToggleCount = 1

  function addBindings() {
    $(document).off('click', togglesSelector)
    $(document).on('click', togglesSelector, onToggleBtnClick)
  }

  function onToggleBtnClick(e) {
    var $toggle = $(e.target)
    var toggleKey = $toggle.attr(dataKey)

    // FIXME this is awful, at least pull them out into separate methods
    if (count === 1) {
      $(togglesSelector + '.active').each(function(index, toggle) {
        removeKeyFromItemModel($(toggle), $(toggle).attr(dataKey))
        $(toggle).removeClass('active')
      })

      addKeyToItemModel($toggle, toggleKey)
      $toggle.addClass('active')
    } else {
      if ($toggle.hasClass('active')) {
        removeKeyFromItemModel($toggle, toggleKey)
        $toggle.removeClass('active')
      } else {
        addKeyToItemModel($toggle, toggleKey)
        $toggle.addClass('active')
      }

      setURLParams()
      validateToggles()
    }

    validateSelection()
  }

  function validateToggles() {
    if ( $(togglesSelector + '.active').length >= count ) {
      $(togglesSelector).not('.active').attr('disabled', 'disabled')
    } else {
      $(togglesSelector).not('.active').removeAttr('disabled')
    }
  }

  function validateSelection() {
    if ( $(togglesSelector + '.active').length >= validToggleCount ) {
      $('[data-container="' + localStorageKey + '"]').data('valid', true)
    } else {
      $('[data-container="' + localStorageKey + '"]').data('valid', false)
    }

    var valid = true
    $('[data-container]').each(function() {
      if (!$(this).data('valid')) {
        valid = false
      }
    })

    if (valid) {
      $('.next').removeAttr('disabled')
    } else {
      $('.next').attr('disabled', 'disabled')
    }
  }

  function addKeyToItemModel($toggle, key) {
    var itemModel = localStorage.getItem(localStorageKey)
    if (itemModel) {
      itemModel = JSON.parse(itemModel)
      itemModel.push(key)
    } else {
      itemModel = [ $toggle.attr(dataKey) ]
    }

    localStorage.setItem(localStorageKey, JSON.stringify(itemModel))
  }

  function removeKeyFromItemModel($toggle, key) {
    var itemModel = localStorage.getItem(localStorageKey)
    itemModel = JSON.parse(itemModel)
    keyIndex = itemModel.indexOf(key)
    itemModel.splice(keyIndex, 1)

    localStorage.setItem(localStorageKey, JSON.stringify(itemModel))
  }

  function setURLParams() {
    if (localStorage.getItem(localStorageKey) && count > 1) {
      var keys = JSON.parse(localStorage.getItem(localStorageKey))
      $('.next').attr('href', originalNextHref + '/' + keys.join(',') + '/questions')
    }
  }

  function setCurrentActiveItems() {
    if (localStorage.getItem(localStorageKey)) {
      var keys = JSON.parse(localStorage.getItem(localStorageKey))
      keys.forEach(function(key) {
        findElemByData({
          attr: dataKey,
          val: key
        }).addClass('active')
      })
      if (count != 1) {
        validateToggles()
      }
    }
  }

  function isValidPage() {
    return $(togglesSelector).length > 0
  }

  function findElemByData(data) {
    return $('[' + data.attr + '="' + data.val + '"]')
  }

  return {
    init: function(options) {
      togglesSelector = '.btn-' + options.key
      dataKey = 'data-' + options.key
      localStorageKey = options.key
      count = options.count || 1
      originalNextHref = $('.next').attr('href')

      if (!isValidPage()) return false

      addBindings()
      setCurrentActiveItems()
      setURLParams()
      validateSelection()
      return this
    }
  }
}
