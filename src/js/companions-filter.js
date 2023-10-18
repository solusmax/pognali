//////////////////////////
//                      //
//     «ПОДБЕРИТЕ       //
//      ИДЕАЛЬНОГО      //
//      ПОПУТЧИКА»      //
//                      //
//////////////////////////

if (document.querySelector('.companions-filter')) {
  const companionsFilter = document.querySelector('.companions-filter');
  const companionsFilterButtons = companionsFilter.querySelectorAll(
    '.companions-filter__block-button',
  );
  const companionsFilterContents = companionsFilter.querySelectorAll(
    '.companions-filter__content',
  );

  // Скрытие/открытие

  for (let i = 0; i < companionsFilterButtons.length; i += 1) {
    companionsFilterButtons[i].addEventListener('click', (evt) => {
      evt.preventDefault();

      companionsFilterButtons[i].classList.toggle(
        'companions-filter__block-button--open',
      );
      companionsFilterContents[i].classList.toggle(
        'companions-filter__content--open',
      );
    });
  }

  // Отключение фокуса в планшетной версии

  const companionsFilterPageWidthTablet = parseInt(
    getComputedStyle(companionsFilter).getPropertyValue(
      '--companions-filter-page-width-tablet',
    ),
    10,
  );
  const companionsFilterPageWidthTabletLast = parseInt(
    getComputedStyle(companionsFilter).getPropertyValue(
      '--companions-filter-page-width-tablet-last',
    ),
    10,
  );
  const companionsFilterTabletMediaQuery =
    '(min-width: ' +
    companionsFilterPageWidthTablet +
    'px) and (max-width: ' +
    companionsFilterPageWidthTabletLast +
    'px)';

  if (window.matchMedia(companionsFilterTabletMediaQuery).matches) {
    for (const companionsFilterButton of companionsFilterButtons) {
      companionsFilterButton.setAttribute('tabindex', '-1');
    }
  }

  window.addEventListener('resize', () => {
    if (window.matchMedia(companionsFilterTabletMediaQuery).matches) {
      for (const companionsFilterButton of companionsFilterButtons) {
        companionsFilterButton.setAttribute('tabindex', '-1');
      }
    } else {
      for (const companionsFilterButton of companionsFilterButtons) {
        companionsFilterButton.removeAttribute('tabindex');
      }
    }
  });
}
