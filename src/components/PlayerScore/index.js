import './style.css';

export function PlayerScore(score = 0) {
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