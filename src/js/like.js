//////////////////////////
//                      //
//         ЛАЙК         //
//                      //
//////////////////////////

if (document.querySelector('.like')) {
  const likeButtons = document.querySelectorAll('.like__button');
  const likeTexts = document.querySelectorAll('.like__button .visually-hidden');
  const likeCounters = document.querySelectorAll('.like__counter');

  for (let i = 0; i < likeButtons.length; i += 1) {
    likeButtons[i].addEventListener('click', (evt) => {
      evt.preventDefault();

      likeButtons[i].classList.toggle('like__button--liked');

      if (likeButtons[i].classList.contains('like__button--liked')) {
        likeTexts[i].textContent = 'Снять лайк';

        if (!/[^\d]/.test(likeCounters[i].textContent)) {
          likeCounters[i].textContent =
            parseInt(likeCounters[i].textContent, 10) + 1;
        }
      } else {
        likeTexts[i].textContent = 'Поставить лайк';

        if (!/[^\d]/.test(likeCounters[i].textContent)) {
          likeCounters[i].textContent =
            parseInt(likeCounters[i].textContent, 10) - 1;
        }
      }
    });
  }
}
