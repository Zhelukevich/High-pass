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

