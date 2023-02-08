import './style.css';
import { CardGame } from '../CardGame';

export function CardFrontBack(icon, altIcon) {
  let checkCards = 0;
  window.cardFlip = {};

  window.cardFlip.hiddenCard = (event) => {
    const cards = event.target.closest('.board-game');
    let cardsHidden = cards.querySelectorAll('.-active');
    
    setTimeout(() => {
      cardsHidden.forEach(element => {
        element.classList.remove('-active');
      });
    }, 1500);
  }

  window.cardFlip.handleClick = (event) => {
    const $origin = event.target;
    const cardToggle = $origin.closest('.card-flip');
    checkCards++;

    if(checkCards >= 2) {
      checkCards = 0
      cardToggle.classList.toggle('-active');
      cardFlip.hiddenCard(event);
      return
    }
    cardToggle.classList.toggle('-active');
  }

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