'use strict';

//////////////////////////
//                      //
//    УДАЛЕНИЕ NO-JS    //
//                      //
//////////////////////////

document.querySelector('.no-js').classList.remove('no-js');

//////////////////////////
//                      //
//         МЕНЮ         //
//                      //
//////////////////////////

if (document.querySelector('.page-header')) {
  const menuToggle = document.querySelector('.menu-toggle');
  const pageHeader = document.querySelector('.page-header');
  const siteNav = pageHeader.querySelector('.page-header__site-nav');
  const userNav = pageHeader.querySelector('.page-header__user-nav');
  const contacts = pageHeader.querySelector('.page-header__contacts');
  const contactsWrapper = pageHeader.querySelector('.page-header__contacts-wrapper');
  const socials = pageHeader.querySelector('.page-header__socials');
  const socialsWrapper = pageHeader.querySelector('.page-header__socials-wrapper');
  const logo = pageHeader.querySelector('.page-header__logo');
  const logoPicture = logo.querySelector('.logo__picture');

  menuToggle.addEventListener('click', function(evt) {
    evt.preventDefault();

    menuToggle.classList.toggle('menu-toggle--open');
    pageHeader.classList.toggle('page-header--open');
    siteNav.classList.toggle('page-header__site-nav--open');
    userNav.classList.toggle('page-header__user-nav--open');
    contacts.classList.toggle('page-header__contacts--open');
    contactsWrapper.classList.toggle('page-header__contacts-wrapper--open');
    socials.classList.toggle('page-header__socials--open');
    socialsWrapper.classList.toggle('page-header__socials-wrapper--open');
    logo.classList.toggle('logo--open');
    logoPicture.classList.toggle('logo__picture--open');
  });

  window.addEventListener('scroll', function() {
    menuToggle.classList.add('menu-toggle--scroll');
    pageHeader.classList.add('page-header--scroll');
    logo.classList.add('logo--scroll');
    logoPicture.classList.add('logo__picture--scroll');

    if (pageYOffset === 0) {
      menuToggle.classList.remove('menu-toggle--scroll');
      pageHeader.classList.remove('page-header--scroll');
      logo.classList.remove('logo--scroll');
      logoPicture.classList.remove('logo__picture--scroll');
    };
  });
};

//////////////////////////
//                      //
//        ЛЕВЕЛ         //
//                      //
//////////////////////////

if (document.querySelector('.level')) {
  const levels = document.querySelectorAll('.level');

  for (const level of levels) {
    const levelSvg = level.querySelector('.level__svg');
    const levelNumber = level.querySelector('.level__number').textContent;
    const levelSize = parseInt(getComputedStyle(level).getPropertyValue('--level-size'));
    const levelBar = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

    levelBar.classList.add('level__bar');

    const setLevelBar = () => {
      const levelBarWidth = parseInt(getComputedStyle(level).getPropertyValue('--level-bar-width'));
      const levelBarPosition = levelSize / 2;
      const levelBarRadius = (levelSize / 2) - (levelBarWidth / 2);
      const levelBarLength = (levelBarRadius * 2) * Math.PI;

      levelBar.setAttribute('cx', levelBarPosition);
      levelBar.setAttribute('cy', levelBarPosition);
      levelBar.setAttribute('r', levelBarRadius);
      levelBar.setAttribute('stroke-dasharray', levelBarLength);

      if (levelNumber >= 90 && levelNumber <= 99) {
        levelBar.setAttribute('stroke-dashoffset', levelBarLength * ((90 + ((levelNumber - 90) / 2)) / 100) - levelBarLength);
      } else {
        levelBar.setAttribute('stroke-dashoffset', levelBarLength * (levelNumber / 100) - levelBarLength);
      };
    };

    setLevelBar();

    levelSvg.append(levelBar);
  };
};

//////////////////////////
//                      //
//        МОДАЛКА       //
//    «БИЗНЕС-ТАРИФЫ»   //
//                      //
//////////////////////////

if (document.querySelector('.business-rates')) {
  const showBusinessRatesLink = document.querySelector('.new-profile__show-business-rates');
  const businessRatesModal = document.querySelector('.business-rates');
  const businessRatesCloseButton = document.querySelector('.business-rates__close');
  const businessRatesBackground =document.querySelector('.business-rates__background');

  // Открытие модалки

  showBusinessRatesLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    businessRatesModal.classList.add('business-rates--shown');
  });

  // Закрытие модалки

  function closeBusinessRatesModal() {
    businessRatesModal.classList.remove('business-rates--shown');
  };

  businessRatesCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    closeBusinessRatesModal();
  });

  businessRatesBackground.addEventListener('click', function(evt) {
    evt.preventDefault();

    closeBusinessRatesModal();
  });

  window.addEventListener('keydown', function(evt) {
    if (evt.code === 'Escape') {
      if (businessRatesModal.classList.contains('business-rates--shown')) {
        evt.preventDefault();

        closeBusinessRatesModal();
      };
    };
  });
};

//////////////////////////
//                      //
//     ШАГИ В ФОРМЕ     //
//                      //
//////////////////////////

if (document.querySelector('.step')) {
  const steps = document.querySelectorAll('.step');
  const nextStep1 = document.querySelector('.step__next--step-1');
  const nextStep2 = document.querySelector('.step__next--step-2');
  const previousStep2 = document.querySelector('.step__previous--step-2');
  const previousStep3 = document.querySelector('.step__previous--step-3');
  const markers = document.querySelectorAll('.add-plan__marker');
  const addPlan = document.querySelector('.add-plan');
  const addPlanPositionY = addPlan.getBoundingClientRect().top + pageYOffset;
  const menuHeight = parseInt(document.querySelector('.page-header').clientHeight);

  function clearCurrentStepClasses() {
    for (const step of steps) {
      step.classList.remove('step--current');
    };

    for (const marker of markers) {
      marker.classList.remove('add-plan__marker--current');
    };
  };

  nextStep1.addEventListener('click', function(evt) {
    evt.preventDefault();

    clearCurrentStepClasses();

    steps[1].classList.add('step--current');
    markers[1].classList.add('add-plan__marker--current');

    window.scrollTo({
      top: addPlanPositionY - menuHeight,
      left: 0,
      behavior: 'smooth'
    });
  });

  nextStep2.addEventListener('click', function(evt) {
    evt.preventDefault();

    clearCurrentStepClasses();

    steps[2].classList.add('step--current');
    markers[2].classList.add('add-plan__marker--current');

    window.scrollTo({
      top: addPlanPositionY - menuHeight,
      left: 0,
      behavior: 'smooth'
    });
  });

  previousStep2.addEventListener('click', function(evt) {
    evt.preventDefault();

    clearCurrentStepClasses();

    steps[0].classList.add('step--current');
    markers[0].classList.add('add-plan__marker--current');

    window.scrollTo({
      top: addPlanPositionY - menuHeight,
      left: 0,
      behavior: 'smooth'
    });
  });

  previousStep3.addEventListener('click', function(evt) {
    evt.preventDefault();

    clearCurrentStepClasses();

    steps[1].classList.add('step--current');
    markers[1].classList.add('add-plan__marker--current');

    window.scrollTo({
      top: addPlanPositionY - menuHeight,
      left: 0,
      behavior: 'smooth'
    });
  });
};

//////////////////////////
//                      //
//   СЧЁТЧИКИ В ФОРМЕ   //
//                      //
//////////////////////////

if (document.querySelector('.counter')) {
  const companionsCounter = document.querySelector('#companions-counter');
  const companionsCounterDecrease = document.querySelector('#companions-counter-decrease');
  const companionsCounterIncrease = document.querySelector('#companions-counter-increase');
  const durationDays = document.querySelector('#duration-days');
  const durationDaysDecrease = document.querySelector('#duration-days-decrease');
  const durationDaysIncrease = document.querySelector('#duration-days-increase');

  // «Ищу попутчиков»

  companionsCounterDecrease.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (companionsCounter.value === '') {
      companionsCounter.value = companionsCounter.min;
    } else if (companionsCounter.value > companionsCounter.min) {
      companionsCounter.value -= 1;
    };
  });

  companionsCounterIncrease.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (companionsCounter.value === '') {
      companionsCounter.value = companionsCounter.min;
    } else {
      companionsCounter.value = parseInt(companionsCounter.value) + 1;
    };
  });

  companionsCounter.addEventListener('input', function() {
    if ((companionsCounter.value < companionsCounter.min) && companionsCounter.value !== '') {
      companionsCounter.value = companionsCounter.min;
    };
  });

  // «Длительность»

  durationDaysDecrease.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (durationDays.value === '') {
      durationDays.value = durationDays.min;
    } else if (durationDays.value > durationDays.min) {
      durationDays.value -= 1;
    };
  });

  durationDaysIncrease.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (durationDays.value === '') {
      durationDays.value = durationDays.min;
    } else {
      durationDays.value = parseInt(durationDays.value) + 1;
    };
  });

  durationDays.addEventListener('input', function() {
    if ((durationDays.value < durationDays.min) && durationDays.value !== '') {
      durationDays.value = durationDays.min;
    };
  });
};

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

  routeButton3.addEventListener('click', function(evt) {
    evt.preventDefault();

    select.classList.toggle('select--open');
    route3.classList.toggle('route__item--open');
    routeButton3.classList.toggle('route__button--open');
    routeRemove3.classList.toggle('route__remove--open');
  });

  // Выбор буквы

  function clearCurrentCountries() {
    for (let i = 0; i < letters.length; i += 1) {
      letters[i].classList.remove('select__letter--current');
      lettersFields[i].classList.remove('select__letter-field--current');
      countriesLists[i].classList.remove('select__countries--current');
    };
  };

  for (let i = 0; i < letters.length; i += 1) {
    lettersFields[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      clearCurrentCountries();

      letters[i].classList.add('select__letter--current');
      lettersFields[i].classList.add('select__letter-field--current');
      countriesLists[i].classList.add('select__countries--current');
    });
  };
};

//////////////////////////
//                      //
//     «ФИЛЬТРАЦИЯ      //
//      ПО СТРАНАМ»     //
//                      //
//////////////////////////

if (document.querySelector('.countries-filter')) {
  const countriesFilter = document.querySelector('.countries-filter');
  const countriesFilterToggle = countriesFilter.querySelector('.countries-filter__toggle');
  const countriesFilterClose = countriesFilter.querySelector('.countries-filter__close')
  const countriesFilterInner = countriesFilter.querySelector('.countries-filter__inner');
  const countriesFilterContinents = countriesFilter.querySelector('.countries-filter__continents');
  const countriesFilterLetters = countriesFilter.querySelector('.countries-filter__letters');
  const countriesFilterCountriesAll = countriesFilter.querySelector('.countries-filter__countries-all');
  const letters = countriesFilter.querySelectorAll('.countries-filter__letter');
  const lettersFields = countriesFilter.querySelectorAll('.countries-filter__letter-field');
  const countriesLists = countriesFilter.querySelectorAll('.countries-filter__countries-wrapper');

  // Скрытие/открытие

  countriesFilterToggle.addEventListener('click', function(evt) {
    evt.preventDefault();

    countriesFilterToggle.classList.toggle('countries-filter__toggle--open');
    countriesFilterInner.classList.toggle('countries-filter__inner--open');
    countriesFilterContinents.classList.toggle('countries-filter__continents--open');
    countriesFilterLetters.classList.toggle('countries-filter__letters--open');
    countriesFilterCountriesAll.classList.toggle('countries-filter__countries-all--open');
    countriesFilterClose.classList.toggle('countries-filter__close--open');
  });

  countriesFilterClose.addEventListener('click', function(evt) {
    evt.preventDefault();

    countriesFilterToggle.classList.remove('countries-filter__toggle--open');
    countriesFilterInner.classList.remove('countries-filter__inner--open');
    countriesFilterContinents.classList.remove('countries-filter__continents--open');
    countriesFilterLetters.classList.remove('countries-filter__letters--open');
    countriesFilterCountriesAll.classList.remove('countries-filter__countries-all--open');
    countriesFilterClose.classList.remove('countries-filter__close--open');
  });

  // Выбор буквы

  function clearCurrentCountries() {
    for (let i = 0; i < letters.length; i += 1) {
      letters[i].classList.remove('countries-filter__letter--current');
      lettersFields[i].classList.remove('countries-filter__letter-field--current');
      countriesLists[i].classList.remove('countries-filter__countries-wrapper--current');
    };
  };

  for (let i = 0; i < letters.length; i += 1) {
    lettersFields[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      clearCurrentCountries();

      letters[i].classList.add('countries-filter__letter--current');
      lettersFields[i].classList.add('countries-filter__letter-field--current');
      countriesLists[i].classList.add('countries-filter__countries-wrapper--current');
    });
  };
}

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
}
