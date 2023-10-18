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
    const levelBar = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle',
    );

    levelBar.classList.add('level__bar');

    const setLevelBar = () => {
      const levelSize = parseInt(
        getComputedStyle(level).getPropertyValue('--level-size'),
        10,
      );
      const levelBarWidth = parseInt(
        getComputedStyle(level).getPropertyValue('--level-bar-width'),
        10,
      );
      const levelBarPosition = levelSize / 2;
      const levelBarRadius = levelSize / 2 - levelBarWidth / 2;
      const levelBarLength = levelBarRadius * 2 * Math.PI;

      levelBar.setAttribute('cx', levelBarPosition);
      levelBar.setAttribute('cy', levelBarPosition);
      levelBar.setAttribute('r', levelBarRadius);
      levelBar.setAttribute('stroke-dasharray', levelBarLength);

      if (levelNumber >= 90 && levelNumber <= 99) {
        levelBar.setAttribute(
          'stroke-dashoffset',
          Math.abs(
            levelBarLength * ((90 + (levelNumber - 90) / 1.5) / 100) -
              levelBarLength,
          ),
        );
      } else {
        levelBar.setAttribute(
          'stroke-dashoffset',
          Math.abs(levelBarLength * (levelNumber / 100) - levelBarLength),
        );
      }
    };

    setLevelBar();

    window.addEventListener('resize', () => {
      setLevelBar();
    });

    levelSvg.append(levelBar);
  }
}
