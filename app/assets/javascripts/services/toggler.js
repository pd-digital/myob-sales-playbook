MSP.Toggler = function() {
  var btnSelector = null
  var dataKey = null
  var localStorageKey = null

  function addBindings() {
    $(document).off('click', btnSelector)
    $(document).on('click', btnSelector, onTeamBtnClick)
  }

  function onTeamBtnClick(e) {
    var $toggle = $(e.target)
    localStorage.setItem(localStorageKey, $toggle.attr(dataKey))
    $(btnSelector).removeClass('active')
    $toggle.addClass('active')
  }

  function setCurrentActiveTeam() {
    var data = localStorage.getItem(localStorageKey)
    dataMatcher(dataKey, data).addClass('active')
  }

  function isValidPage() {
    return $(btnSelector).length > 0
  }

  function dataMatcher(dataAttr, dataVal) {
    return $('[' + dataAttr + '="' + dataVal + '"]')
  }

  return {
    init: function(options) {
      btnSelector = options.btnSelector
      dataKey = options.dataKey
      localStorageKey = options.localStorageKey

      if (!isValidPage()) return false

      addBindings()
      setCurrentActiveTeam()
      return this
    }
  }
}
