//////////////////////////
//                      //
//         МЕНЮ         //
//                      //
//////////////////////////

const menuToggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.header');
const headerInner = header.querySelector('.header__inner');
const headerSiteNav = header.querySelector('.header__site-nav');
const siteNav = document.querySelector('.site-nav');
const siteNavLinks = document.querySelectorAll('.site-nav__link');
const userNav = header.querySelector('.header__user-nav');
const contacts = header.querySelector('.header__contacts');
const contactsWrapper = header.querySelector('.header__contacts-wrapper');
const socials = header.querySelector('.header__socials');
const socialsWrapper = header.querySelector('.header__socials-wrapper');
const logo = header.querySelector('.header__logo');
const logoPicture = logo.querySelector('.logo__picture');

menuToggle.addEventListener('click', (evt) => {
  evt.preventDefault();

  menuToggle.classList.toggle('menu-toggle--open');
  header.classList.toggle('header--open');
  headerInner.classList.toggle('header__inner--open');
  headerSiteNav.classList.toggle('header__site-nav--open');
  userNav.classList.toggle('header__user-nav--open');
  contacts.classList.toggle('header__contacts--open');
  contactsWrapper.classList.toggle('header__contacts-wrapper--open');
  socials.classList.toggle('header__socials--open');
  socialsWrapper.classList.toggle('header__socials-wrapper--open');
  logo.classList.toggle('logo--open');
  logoPicture.classList.toggle('logo__picture--open');
});

export const scrolledMenu = () => {
  menuToggle.classList.add('menu-toggle--scroll');
  header.classList.add('header--scroll');
  headerInner.classList.add('header__inner--scroll');
  siteNav.classList.add('site-nav--scroll');
  for (const siteNavLink of siteNavLinks) {
    siteNavLink.classList.add('site-nav__link--scroll');
  }
  logo.classList.add('logo--scroll');
  logoPicture.classList.add('logo__picture--scroll');
};

export const notScrolledMenu = () => {
  menuToggle.classList.remove('menu-toggle--scroll');
  header.classList.remove('header--scroll');
  headerInner.classList.remove('header__inner--scroll');
  siteNav.classList.remove('site-nav--scroll');
  for (const siteNavLink of siteNavLinks) {
    siteNavLink.classList.remove('site-nav__link--scroll');
  }
  logo.classList.remove('logo--scroll');
  logoPicture.classList.remove('logo__picture--scroll');
};

if (scrollY > 0) {
  scrolledMenu();
}

window.addEventListener('scroll', () => {
  scrolledMenu();

  if (scrollY === 0) {
    if (document.querySelector('.business-rates')) {
      const isModal = document
        .querySelector('.business-rates')
        .classList.contains('business-rates--shown');

      if (!isModal) {
        notScrolledMenu();
      }
    } else {
      notScrolledMenu();
    }
  }
});
