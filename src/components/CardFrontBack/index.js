import './style.css';
import { CardGame } from '../CardGame';

export function CardFrontBack() {
  let coiso = 0;
  window.cardFlip = {};

  window.cardFlip.hiddenCard = (event) => {
    setTimeout(() => {
      const cardsHidden = event.target.closest('.board-game');
      let filhos = cardsHidden.querySelectorAll('.-active');
      filhos.forEach(element => {
        element.classList.toggle('-active');
      });
    }, 2000);
  }

  window.cardFlip.handleClick = (event) => {
    const $origin = event.target;
    const cardToggle = $origin.closest('.card-flip');
    coiso++;

    if(coiso >= 2) {
      const cards = event
      cardToggle.classList.toggle('-active');
      cardFlip.hiddenCard(cards);
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
        ${CardGame('javascript', 'LOgo')}
      </div>
    </article>
  `
}