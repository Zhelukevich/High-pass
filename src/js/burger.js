document.addEventListener('DOMContentLoaded', () => {
  let burger = document.querySelector('#burger--open')
  let menu = document.querySelector('#burger')
  let menulinks = menu.querySelectorAll('.burger__link')
  let menuexit = menu.querySelector('#burger--exit')

  burger.addEventListener('click',
    function () {
      menu.classList.toggle('burger--add');
    })

  menuexit.addEventListener('click',
    function () {
      menu.classList.remove('burger--add');
    })

  menulinks.forEach(function (el) {
    el.addEventListener('click', function () {

      menu.classList.remove('burger--add');
    })

  })
})
