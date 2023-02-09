import './style.css';

export function PlayerScore(score = 0) {
  const swapPlayer = () => {
    const $arrowDown = document.querySelector('.arrow-down');
    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
    $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1)
  };

  window.playerScore = {};

  window.playerScore.scoreGame = () => {
    swapPlayer()
  };

  return /* html */ `
    <div 
      class="bar-score"
      data-scores="${score}"
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