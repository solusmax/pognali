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
  });

  window.addEventListener('scroll', function() {
    menuToggle.classList.add('menu-toggle--scroll');
    pageHeader.classList.add('page-header--scroll');

    if (pageYOffset === 0) {
      menuToggle.classList.remove('menu-toggle--scroll');
      pageHeader.classList.remove('page-header--scroll');
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
    const levelBar = level.querySelector('.level__bar');
    const levelNumber = level.querySelector('.level__number').textContent;

    const levelSize = parseInt(getComputedStyle(level).getPropertyValue('--level-size'));
    const levelBarWidth = parseInt(getComputedStyle(level).getPropertyValue('--level-bar-width'));

    levelBar.setAttribute('cx', levelSize / 2);
    levelBar.setAttribute('cy', levelSize / 2);
    levelBar.setAttribute('r', (levelSize / 2) - (levelBarWidth / 2));

    const levelBarLength = (levelBar.r.baseVal.value * 2) * Math.PI;

    levelBar.style.strokeDasharray = levelBarLength;

    if (levelNumber >= 90 && levelNumber <= 99) {
      levelBar.style.strokeDashoffset = levelBarLength * ((90 + ((levelNumber - 90) / 2)) / 100) - levelBarLength;
    } else {
      levelBar.style.strokeDashoffset = levelBarLength * (levelNumber / 100) - levelBarLength;
    };
  };
};
