'use strict';

//////////////////////////
//                      //
//     «ПОДБЕРИТЕ       //
//      ИДЕАЛЬНОГО      //
//      ПОПУТЧИКА»      //
//                      //
//////////////////////////

if (document.querySelector('.companions-filter')) {
  const companionsFilter = document.querySelector('.companions-filter');
  const companionsFilterButtons = companionsFilter.querySelectorAll('.companions-filter__block-button');
  const companionsFilterContents = companionsFilter.querySelectorAll('.companions-filter__content');

  // Скрытие/открытие

  for (let i = 0; i < companionsFilterButtons.length; i += 1) {
    companionsFilterButtons[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      companionsFilterButtons[i].classList.toggle('companions-filter__block-button--open');
      companionsFilterContents[i].classList.toggle('companions-filter__content--open');
    });
  };

  // Отключение фокуса в планшетной версии

  let companionsFilterPageWidthTablet = parseInt(getComputedStyle(companionsFilter).getPropertyValue('--companions-filter-page-width-tablet'));
  let companionsFilterPageWidthTabletLast = parseInt(getComputedStyle(companionsFilter).getPropertyValue('--companions-filter-page-width-tablet-last'));
  let companionsFilterTabletMediaQuery = '(min-width: ' + companionsFilterPageWidthTablet + 'px) and (max-width: ' + companionsFilterPageWidthTabletLast + 'px)';

  if (window.matchMedia(companionsFilterTabletMediaQuery).matches) {
    for (let companionsFilterButton of companionsFilterButtons) {
      companionsFilterButton.setAttribute('tabindex', '-1');
    } ;
  };

  window.addEventListener('resize', function() {
    if (window.matchMedia(companionsFilterTabletMediaQuery).matches) {
      for (let companionsFilterButton of companionsFilterButtons) {
        companionsFilterButton.setAttribute('tabindex', '-1');
      };
    } else {
      for (let companionsFilterButton of companionsFilterButtons) {
        companionsFilterButton.removeAttribute('tabindex');
      };
    };
  });
};
