
document.addEventListener('DOMContentLoaded', () => {
  let searchOpen = document.querySelector('#search-open')
  let search = document.querySelector('#header__search-left')
  let searchexit = search.querySelector('#search__exit')

  searchOpen.addEventListener('click',
    function () {
      search.classList.add('search--open');
    })

  searchexit.addEventListener('click',
    function () {
      search.classList.remove('search--open');
    })

})
