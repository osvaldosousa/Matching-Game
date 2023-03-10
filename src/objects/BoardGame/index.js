import './style.css';
import { cards } from './cards';
import { CardFrontBack } from "../../components/CardFrontBack";

export function BoardGame(amountCards) {
  const htmlCards =  cards.map((card) => CardFrontBack(card.icon, card.altIcon, card.id));
  const $htmlCards = htmlCards.join('');

  const validPoint = () => {
    const cardsId = Array.from(document.querySelectorAll('.-active', '[data-id]'));
    const idValues = cardsId.map(element => element.dataset.id);

    if(idValues[0] === idValues[1]) {
      swapPlayer()
      playerScore.pointPlayer(cardsId)
      return true
    }
    return false
  };

  const swapPlayer = () => {
    const $arrowDown = document.querySelector('.arrow-down');
    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
    setTimeout(() => {
    $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1)
    }, 1300);
  }

  const flipperCard = (event) => {
    const $origin = event.target
    const cardToggle = $origin.closest('.card-flip')
    cardToggle.classList.toggle('-active')
  };

  const flipperHideCards = () => {
    const cards = document.querySelector('.board-game');
    const cardsActive = cards.querySelectorAll('.-active');
    cardsActive.forEach(element => {
      element.classList.remove('-active')
    })
  };

  const hideCards = () => {
    const cards = document.querySelector('.board-game');
    const cardsActive = cards.querySelectorAll('.-active');
    const point = validPoint()

    if (cardsActive.length === 2 && point === true) return

    if (cardsActive.length === 2) {
      swapPlayer()
      setTimeout(() => {
        flipperHideCards()
      }, 1200)
    }
  };

  window.boardGame = {}

  window.boardGame.handleClick = (event) => {
    flipperCard(event)
    hideCards()
  }

  return /*html*/ `
    <section class="board-game" onClick="boardGame.handleClick(event)">
      ${$htmlCards}
    </section>
  `;
}