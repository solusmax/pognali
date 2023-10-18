//////////////////////////
//                      //
//   СЧЁТЧИКИ В ФОРМЕ   //
//                      //
//////////////////////////

if (document.querySelector('.counter')) {
  const companionsCounter = document.querySelector('#companions-counter');
  const companionsCounterDecrease = document.querySelector(
    '#companions-counter-decrease',
  );
  const companionsCounterIncrease = document.querySelector(
    '#companions-counter-increase',
  );
  const durationDays = document.querySelector('#duration-days');
  const durationDaysDecrease = document.querySelector(
    '#duration-days-decrease',
  );
  const durationDaysIncrease = document.querySelector(
    '#duration-days-increase',
  );

  // «Ищу попутчиков»

  companionsCounterDecrease.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (companionsCounter.value === '') {
      companionsCounter.value = companionsCounter.min;
    } else if (companionsCounter.value > companionsCounter.min) {
      companionsCounter.value -= 1;
    }
  });

  companionsCounterIncrease.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (companionsCounter.value === '') {
      companionsCounter.value = companionsCounter.min;
    } else {
      companionsCounter.value = parseInt(companionsCounter.value, 10) + 1;
    }
  });

  companionsCounter.addEventListener('input', () => {
    if (
      companionsCounter.value < companionsCounter.min &&
      companionsCounter.value !== ''
    ) {
      companionsCounter.value = companionsCounter.min;
    }
  });

  // «Длительность»

  durationDaysDecrease.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (durationDays.value === '') {
      durationDays.value = durationDays.min;
    } else if (durationDays.value > durationDays.min) {
      durationDays.value -= 1;
    }
  });

  durationDaysIncrease.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (durationDays.value === '') {
      durationDays.value = durationDays.min;
    } else {
      durationDays.value = parseInt(durationDays.value, 10) + 1;
    }
  });

  durationDays.addEventListener('input', () => {
    if (durationDays.value < durationDays.min && durationDays.value !== '') {
      durationDays.value = durationDays.min;
    }
  });
}
