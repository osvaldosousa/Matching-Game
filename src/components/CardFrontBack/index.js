import './style.css';
import { CardGame } from '../CardGame';

export function CardFrontBack() {
  window.cardFlip = {};
  window.cardFlip.handleClick = (event) => {
    const $origin = event.target;
    const coiso = $origin.closest('.card-flip');
    coiso.classList.toggle('-active');
  }

  return /* html */ `
    <article class="card-flip" onClick="cardFlip.handleClick(event)">
      <div class="card-front">
        ${CardGame()}
      </div>
      <div class="card-back">
        ${CardGame('javascript', 'LOgo')}
      </div>
    </article>
  `
}