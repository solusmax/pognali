'use strict';

//////////////////////////
//                      //
//         МЕНЮ         //
//                      //
//////////////////////////

const menuToggle = document.querySelector('.menu-toggle');
const pageHeader = document.querySelector('.page-header');
const pageHeaderInner = pageHeader.querySelector('.page-header__inner');
const pageHeaderSiteNav = pageHeader.querySelector('.page-header__site-nav');
const siteNav = document.querySelector('.site-nav');
const siteNavLinks = document.querySelectorAll('.site-nav__link');
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
  pageHeaderInner.classList.toggle('page-header__inner--open');
  pageHeaderSiteNav.classList.toggle('page-header__site-nav--open');
  userNav.classList.toggle('page-header__user-nav--open');
  contacts.classList.toggle('page-header__contacts--open');
  contactsWrapper.classList.toggle('page-header__contacts-wrapper--open');
  socials.classList.toggle('page-header__socials--open');
  socialsWrapper.classList.toggle('page-header__socials-wrapper--open');
  logo.classList.toggle('logo--open');
  logoPicture.classList.toggle('logo__picture--open');
});

function scrolledMenu() {
  menuToggle.classList.add('menu-toggle--scroll');
  pageHeader.classList.add('page-header--scroll');
  pageHeaderInner.classList.add('page-header__inner--scroll');
  siteNav.classList.add('site-nav--scroll');
  for (let siteNavLink of siteNavLinks) {
    siteNavLink.classList.add('site-nav__link--scroll')
  };
  logo.classList.add('logo--scroll');
  logoPicture.classList.add('logo__picture--scroll');
};

function notScrolledMenu() {
  menuToggle.classList.remove('menu-toggle--scroll');
  pageHeader.classList.remove('page-header--scroll');
  pageHeaderInner.classList.remove('page-header__inner--scroll');
  siteNav.classList.remove('site-nav--scroll');
  for (let siteNavLink of siteNavLinks) {
    siteNavLink.classList.remove('site-nav__link--scroll')
  };
  logo.classList.remove('logo--scroll');
  logoPicture.classList.remove('logo__picture--scroll');
}

if (pageYOffset > 0) {
  scrolledMenu();
}

window.addEventListener('scroll', function() {
  scrolledMenu();
  let isModal = document.querySelector('.business-rates').classList.contains('business-rates--shown');

  if (pageYOffset === 0 && !isModal) {
    notScrolledMenu();
  };
});
