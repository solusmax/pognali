'use strict';

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
