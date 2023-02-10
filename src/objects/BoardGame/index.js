import './style.css';
import { cards } from './cards';
import { CardFrontBack } from "../../components/CardFrontBack";

export function BoardGame(amountCards) {
  const htmlCards =  cards.map((card) => CardFrontBack(card.icon, card.altIcon, card.id));
  const $htmlCards = htmlCards.join('');

  const validPoint = () => {
    const cardsId = Array.from(document.querySelectorAll('.-active', '[data-id]'));
    const idValues = cardsId.map( element => element.dataset.id);

    if(idValues[0] === idValues[1]) {
      playerScore.swapPlayer()
      playerScore.pointPlayer(cardsId)
      return true
    }

    return false
  };

  const flipCard = (event) => {
    const $origin = event.target
    const cardToggle = $origin.closest('.card-flip')
    cardToggle.classList.toggle('-active')
  };

  const hideCards = () => {
    const cards = document.querySelector('.board-game');
    const cardsActive = cards.querySelectorAll('.-active');
    const ponit = validPoint()

    if (cardsActive.length === 2 && ponit === true) return

    if (cardsActive.length === 2) {
      playerScore.swapPlayer()
      setTimeout(() => {
        cardsActive.forEach(element => {
          element.classList.remove('-active')
        })
      }, 1200)
    }
  };

  window.boardGame = {}

  window.boardGame.handleClick = event => {
    flipCard(event)
    hideCards()
  }

  return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick(event)">
      ${$htmlCards}
    </section>
  `;
}