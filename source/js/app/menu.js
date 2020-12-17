'use strict';

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
