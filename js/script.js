$(document).ready(function () {
  $('.nav-toggler').each(function (_, navToggler) {
    var target = $(navToggler).data('target')
    $(navToggler).on('click', function () {
      console.log('click here')
      $(target).animate({
        height: 'toggle',
      })
    })
  })
})
