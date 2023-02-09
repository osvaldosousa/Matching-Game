import './style.css';
import { CardGame } from '../CardGame';

export function CardFrontBack(icon, altIcon) {
  const flipCard = (event) => {
    const $origin = event.target;
    const cardToggle = $origin.closest('.card-flip');
    cardToggle.classList.toggle('-active');
  };

  const hideCards = () => {
    const cards = document.querySelector('.board-game');
    const cardsActive = cards.querySelectorAll('.-active');

    if(cardsActive.length === 2) {
      
      setTimeout(() => {
        cardsActive.forEach(element => {
          element.classList.remove('-active');
        });
        playerScore.scoreGame();
      }, 1200);
    }
  };

  window.cardsFlip = {};

  window.cardsFlip.handleClick = (event) => {
    flipCard(event)
    hideCards();
  };

  return /* html */ `
    <article class="card-flip" onClick="cardsFlip.handleClick(event)">
      <div class="card-front">
        ${CardGame()}
      </div>
      <div class="card-back">
        ${CardGame(icon, altIcon)}
      </div>
    </article>
  `;
}