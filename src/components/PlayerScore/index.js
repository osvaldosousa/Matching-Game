import './style.css';

export function PlayerScore(player = 1) {
  const addPointPlayer = (currentPlayer) => {
    const playerAddPoint = currentPlayer - 1;
    const barScore = Array.from(document.querySelectorAll('[data-player]'));
    const squarePoint = barScore[playerAddPoint].querySelector('.score');

    setTimeout(() => {
      squarePoint.classList.remove('score');
      squarePoint.classList.add('player-point');
    }, 1300);
  };

  window.playerScore = {};
  window.playerScore.pointPlayer = (point) => {
    const $arrowDown = document.querySelector('[data-currentplayer]');
    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');

    addPointPlayer(currentPlayer)

    point.forEach(element => {
      element.classList.add('-point-done')
      element.classList.remove('-active')
    });
  }

  return /* html */ `
    <div 
      class="bar-score"
      data-player="${player}"
    >
      <div class="score">

      </div>
      <div class="score">

      </div>
      <div class="score">

      </div>
    </div>
  `;
}