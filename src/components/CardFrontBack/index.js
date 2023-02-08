import './style.css';
import { CardGame } from '../CardGame';

export function CardFrontBack(icon, altIcon) {
  window.cardFlip = {};

  window.cardFlip.hiddenCard = () => {
    const cards = event.target.closest('.board-game');
    const cardsHidden = cards.querySelectorAll('.-active');

    if(cardsHidden.length === 2) {
      setTimeout(() => {
        cardsHidden.forEach(element => {
          element.classList.remove('-active');
        });
      }, 1200);
    }
  };

  window.cardFlip.handleClick = (event) => {
    const $origin = event.target;
    const cardToggle = $origin.closest('.card-flip');
    cardToggle.classList.toggle('-active');
    cardFlip.hiddenCard();
  };

  return /* html */ `
    <article class="card-flip" onClick="cardFlip.handleClick(event)">
      <div class="card-front">
        ${CardGame()}
      </div>
      <div class="card-back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `;
}