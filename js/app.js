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

// maps
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76660427505253, 37.63401480661795],
    zoom: 14,
  });




  var myPlacemark = new ymaps.Placemark([55.76928973618065, 37.63996931063102], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../images/svg/L.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-3, -50]
  });

  myMap.geoObjects.add(myPlacemark);

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}



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


document.addEventListener('DOMContentLoaded', () => {
  const validationAbout = new JustValidate('.about__form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      fontFamily: "Roboto",
      fontSize: '9px',
      color: '#FF3030',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validationAbout
    .addField('.email', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',

      },
      {
        rule: 'email',
        errorMessage: 'Электронная почта имеет недопустимый формат',

      },
    ])


  const validationContacts = new JustValidate('.form-contacts', {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      fontFamily: "Roboto",
      fontSize: '9px',
      color: '#FF3030',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validationContacts
    .addField('.name', [

      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Сообщение должно состоять более чем из 3 букв.',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Поле должно содержать не более 15 символов',
      },

      {
        rule: 'customRegexp',
        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
        errorMessage: 'Недопустимый формат',
      },

    ])

    .addField('.email', [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',

      },
      {
        rule: 'email',
        errorMessage: 'Электронная почта имеет недопустимый формат',

      },
    ])

    .addField('.textarea', [
      {
        validator: (value) => {
          return value !== undefined && value.length > 5;
        },
        errorMessage: 'Сообщение должно состоять более чем из 5 букв.',
      },
    ])
})




//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci5qcyIsIm1hcC5qcyIsInNlYXJjaC5qcyIsInZhbGlkYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItLW9wZW4nKVxuICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXInKVxuICBsZXQgbWVudWxpbmtzID0gbWVudS5xdWVyeVNlbGVjdG9yQWxsKCcuYnVyZ2VyX19saW5rJylcbiAgbGV0IG1lbnVleGl0ID0gbWVudS5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyLS1leGl0JylcblxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hZGQnKTtcbiAgICB9KVxuXG4gIG1lbnVleGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWRkJyk7XG4gICAgfSlcblxuICBtZW51bGlua3MuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItLWFkZCcpO1xuICAgIH0pXG5cbiAgfSlcbn0pXG4iLCIvLyBtYXBzXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgIGNlbnRlcjogWzU1Ljc2NjYwNDI3NTA1MjUzLCAzNy42MzQwMTQ4MDY2MTc5NV0sXHJcbiAgICB6b29tOiAxNCxcclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgdmFyIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzY5Mjg5NzM2MTgwNjUsIDM3LjYzOTk2OTMxMDYzMTAyXSwge30sIHtcclxuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgIGljb25JbWFnZUhyZWY6ICcuLi9pbWFnZXMvc3ZnL0wuc3ZnJyxcclxuICAgIGljb25JbWFnZVNpemU6IFsxMiwgMTJdLFxyXG4gICAgaWNvbkltYWdlT2Zmc2V0OiBbLTMsIC01MF1cclxuICB9KTtcclxuXHJcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG5cclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2dlb2xvY2F0aW9uQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQs9C10L7Qu9C+0LrQsNGG0LjRjlxyXG4gIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQv9C+0LjRgdC6XHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC+0L3RgtGA0L7Qu9GMINGC0YDQsNGE0LjQutCwXHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTsgLy8g0YPQtNCw0LvRj9C10Lwg0YLQuNC/XHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC90L7Qv9C60YMg0L/QtdGA0LXRhdC+0LTQsCDQsiDQv9C+0LvQvdC+0Y3QutGA0LDQvdC90YvQuSDRgNC10LbQuNC8XHJcbiAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC+0L3RgtGA0L7QuyDQt9GD0LzQvNC40YDQvtCy0LDQvdC40Y9cclxuICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpOyAvLyDRg9C00LDQu9GP0LXQvCDQutC+0L3RgtGA0L7QuyDQv9GA0LDQstC40LtcclxuICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZShbJ3Njcm9sbFpvb20nXSk7IC8vINC+0YLQutC70Y7Rh9Cw0LXQvCDRgdC60YDQvtC70Lsg0LrQsNGA0YLRiyAo0L7Qv9GG0LjQvtC90LDQu9GM0L3QvilcclxufVxyXG5cclxuIiwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBsZXQgc2VhcmNoT3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtb3BlbicpXG4gIGxldCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyX19zZWFyY2gtbGVmdCcpXG4gIGxldCBzZWFyY2hleGl0ID0gc2VhcmNoLnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2hfX2V4aXQnKVxuXG4gIHNlYXJjaE9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlYXJjaC5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtLW9wZW4nKTtcbiAgICB9KVxuXG4gIHNlYXJjaGV4aXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtLW9wZW4nKTtcbiAgICB9KVxuXG59KVxuIiwiXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgY29uc3QgdmFsaWRhdGlvbkFib3V0ID0gbmV3IEp1c3RWYWxpZGF0ZSgnLmFib3V0X19mb3JtJywge1xyXG4gICAgZXJyb3JGaWVsZENzc0NsYXNzOiAnaXMtaW52YWxpZCcsXHJcbiAgICBlcnJvckxhYmVsU3R5bGU6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJSb2JvdG9cIixcclxuICAgICAgZm9udFNpemU6ICc5cHgnLFxyXG4gICAgICBjb2xvcjogJyNGRjMwMzAnLFxyXG4gICAgfSxcclxuICAgIGZvY3VzSW52YWxpZEZpZWxkOiB0cnVlLFxyXG4gICAgbG9ja0Zvcm06IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gIHZhbGlkYXRpb25BYm91dFxyXG4gICAgLmFkZEZpZWxkKCcuZW1haWwnLCBbXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiAnZW1haWwnLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Ct0LvQtdC60YLRgNC+0L3QvdCw0Y8g0L/QvtGH0YLQsCDQuNC80LXQtdGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG5cclxuICAgICAgfSxcclxuICAgIF0pXHJcblxyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uQ29udGFjdHMgPSBuZXcgSnVzdFZhbGlkYXRlKCcuZm9ybS1jb250YWN0cycsIHtcclxuICAgIGVycm9yRmllbGRDc3NDbGFzczogJ2lzLWludmFsaWQnLFxyXG4gICAgZXJyb3JMYWJlbFN0eWxlOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6IFwiUm9ib3RvXCIsXHJcbiAgICAgIGZvbnRTaXplOiAnOXB4JyxcclxuICAgICAgY29sb3I6ICcjRkYzMDMwJyxcclxuICAgIH0sXHJcbiAgICBmb2N1c0ludmFsaWRGaWVsZDogdHJ1ZSxcclxuICAgIGxvY2tGb3JtOiB0cnVlLFxyXG4gIH0pO1xyXG5cclxuICB2YWxpZGF0aW9uQ29udGFjdHNcclxuICAgIC5hZGRGaWVsZCgnLm5hbWUnLCBbXHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjycsXHJcbiAgICAgICAgdmFsdWU6IC8oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbQCQhJSojPyZeXy1dKS57OCx9LyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxyXG4gICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Ch0L7QvtCx0YnQtdC90LjQtSDQtNC+0LvQttC90L4g0YHQvtGB0YLQvtGP0YLRjCDQsdC+0LvQtdC1INGH0LXQvCDQuNC3IDMg0LHRg9C60LIuJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHJ1bGU6ICdtYXhMZW5ndGgnLFxyXG4gICAgICAgIHZhbHVlOiAxNSxcclxuICAgICAgICBlcnJvck1lc3NhZ2U6ICfQn9C+0LvQtSDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC90LUg0LHQvtC70LXQtSAxNSDRgdC40LzQstC+0LvQvtCyJyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiAnY3VzdG9tUmVnZXhwJyxcclxuICAgICAgICB2YWx1ZTogLyg/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltAJCElKiM/Jl5fLV0pLns4LH0vLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgICB9LFxyXG5cclxuICAgIF0pXHJcblxyXG4gICAgLmFkZEZpZWxkKCcuZW1haWwnLCBbXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPJyxcclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBydWxlOiAnZW1haWwnLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Ct0LvQtdC60YLRgNC+0L3QvdCw0Y8g0L/QvtGH0YLQsCDQuNC80LXQtdGCINC90LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG5cclxuICAgICAgfSxcclxuICAgIF0pXHJcblxyXG4gICAgLmFkZEZpZWxkKCcudGV4dGFyZWEnLCBbXHJcbiAgICAgIHtcclxuICAgICAgICB2YWxpZGF0b3I6ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUubGVuZ3RoID4gNTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogJ9Ch0L7QvtCx0YnQtdC90LjQtSDQtNC+0LvQttC90L4g0YHQvtGB0YLQvtGP0YLRjCDQsdC+0LvQtdC1INGH0LXQvCDQuNC3IDUg0LHRg9C60LIuJyxcclxuICAgICAgfSxcclxuICAgIF0pXHJcbn0pXHJcblxyXG5cclxuXHJcbiJdfQ==
