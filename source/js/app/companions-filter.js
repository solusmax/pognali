'use strict';

//////////////////////////
//                      //
//     «ПОДБЕРИТЕ       //
//      ИДЕАЛЬНОГО      //
//      ПОПУТЧИКА»      //
//                      //
//////////////////////////

if (document.querySelector('.companions-filter')) {
  const companionsFilterButtons = document.querySelectorAll('.companions-filter__block-button');
  const companionsFilterContents = document.querySelectorAll('.companions-filter__content');

  for (let i = 0; i < companionsFilterButtons.length; i += 1) {
    companionsFilterButtons[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      companionsFilterButtons[i].classList.toggle('companions-filter__block-button--open');
      companionsFilterContents[i].classList.toggle('companions-filter__content--open');
    });
  };
};
