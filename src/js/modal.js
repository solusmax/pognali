//////////////////////////
//                      //
//        МОДАЛКА       //
//    «БИЗНЕС-ТАРИФЫ»   //
//                      //
//////////////////////////

import { notScrolledMenu, scrolledMenu } from './menu';

if (document.querySelector('.business-rates')) {
  const showBusinessRatesLink = document.querySelector(
    '.new-profile__show-business-rates-link',
  );
  const businessRatesModal = document.querySelector('.business-rates');
  const businessRatesCloseButton = document.querySelector(
    '.business-rates__close',
  );
  const businessRatesBackground = document.querySelector(
    '.business-rates__background',
  );

  // Открытие модалки

  showBusinessRatesLink.addEventListener('click', (evt) => {
    evt.preventDefault();

    businessRatesModal.classList.add('business-rates--shown');

    if (scrollY === 0) {
      scrolledMenu();
    }
  });

  // Закрытие модалки

  const closeBusinessRatesModal = () => {
    businessRatesModal.classList.remove('business-rates--shown');
  };

  businessRatesCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    closeBusinessRatesModal();

    if (scrollY === 0) {
      notScrolledMenu();
    }
  });

  businessRatesBackground.addEventListener('click', (evt) => {
    evt.preventDefault();

    closeBusinessRatesModal();

    if (scrollY === 0) {
      notScrolledMenu();
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
      if (businessRatesModal.classList.contains('business-rates--shown')) {
        evt.preventDefault();

        closeBusinessRatesModal();

        if (scrollY === 0) {
          notScrolledMenu();
        }
      }
    }
  });
}
