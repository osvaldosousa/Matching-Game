import './style.css';

export function PlayerScore(player = "um") {
  window.playerScore = {};

  window.playerScore.pointPlayer = (point) => {
    point.forEach(element => {
      element.classList.add('-point-done')
      element.classList.remove('-active')
    });
  }

  window.playerScore.swapPlayer = () => {
    const $arrowDown = document.querySelector('.arrow-down');
    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
    setTimeout(() => {
    $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1)
    }, 1300);
  };

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