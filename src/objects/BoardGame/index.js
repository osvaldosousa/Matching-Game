import './style.css';
import { cards } from './cards';
import { CardFrontBack } from "../../components/CardFrontBack";

export function BoardGame(amountCards) {
  const htmlCards =  cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCards = htmlCards.join('');

  return /*html*/ `
    <section class="board-game">
      ${$htmlCards}
    </section>
  `;
}