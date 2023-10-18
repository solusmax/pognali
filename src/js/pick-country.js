//////////////////////////
//                      //
//   «ВЫБЕРИТЕ СТРАНУ»  //
//                      //
//////////////////////////

if (document.querySelector('.select')) {
  const select = document.querySelector('.select');
  const route3 = document.querySelector('.route__item--item-3');
  const routeButton3 = route3.querySelector('#route-3');
  const routeRemove3 = route3.querySelector('#route-3-remove');
  const letters = select.querySelectorAll('.select__letter');
  const lettersFields = select.querySelectorAll('.select__letter-field');
  const countriesLists = select.querySelectorAll('.select__countries');

  // Открытие селекта

  routeButton3.addEventListener('click', (evt) => {
    evt.preventDefault();

    select.classList.toggle('select--open');
    route3.classList.toggle('route__item--open');
    routeButton3.classList.toggle('route__button--open');
    routeRemove3.classList.toggle('route__remove--open');
  });

  // Выбор буквы

  const clearCurrentCountries = () => {
    for (let i = 0; i < letters.length; i += 1) {
      letters[i].classList.remove('select__letter--current');
      lettersFields[i].classList.remove('select__letter-field--current');
      countriesLists[i].classList.remove('select__countries--current');
    }
  };

  for (let i = 0; i < letters.length; i += 1) {
    lettersFields[i].addEventListener('click', (evt) => {
      evt.preventDefault();

      clearCurrentCountries();

      letters[i].classList.add('select__letter--current');
      lettersFields[i].classList.add('select__letter-field--current');
      countriesLists[i].classList.add('select__countries--current');
    });
  }
}
