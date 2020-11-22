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

const menuToggle = document.querySelector('.menu-toggle');
const pageHeader = document.querySelector('.page-header');
const siteNav = document.querySelector('.site-nav');
const userNav = document.querySelector('.user-nav');
const contacts = document.querySelector('.contacts');
const contactsWrapper = document.querySelector('.page-header__contacts-wrapper');
const socials = document.querySelector('.socials');
const socialsWrapper = document.querySelector('.page-header__socials-wrapper');

menuToggle.addEventListener('click', function(evt) {
  evt.preventDefault();

  menuToggle.classList.toggle('menu-toggle--open');
  pageHeader.classList.toggle('page-header--open');
  siteNav.classList.toggle('site-nav--open');
  userNav.classList.toggle('user-nav--open');
  contacts.classList.toggle('contacts--open');
  contactsWrapper.classList.toggle('page-header__contacts-wrapper--open');
  socials.classList.toggle('socials--open');
  socialsWrapper.classList.toggle('page-header__socials-wrapper--open');
});

window.addEventListener("scroll", function() {
  menuToggle.classList.add('menu-toggle--scroll');
  pageHeader.classList.add('page-header--scroll');

  if (pageYOffset === 0) {
    menuToggle.classList.remove('menu-toggle--scroll');
    pageHeader.classList.remove('page-header--scroll');
  }
});
