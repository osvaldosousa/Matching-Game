import './style.css';
import { CardFrontBack } from "../../components/CardFrontBack";

export function BoardGame(amountCards) {
  const cards = [
    {
      icon: "css",
      altIcon: "css logo em pixel arte"
    },
    {
      icon: "html",
      altIcon: "html logo em pixel arte"
    },
    {
      icon: "javascript",
      altIcon: "javascript logo em pixel arte"
    },
    {
      icon: "css",
      altIcon: "css logo em pixel arte"
    },
    {
      icon: "html",
      altIcon: "html logo em pixel arte"
    },
    {
      icon: "javascript",
      altIcon: "javascript logo em pixel arte"
    }
  ];

  const htmlCards =  cards.map((card) => CardFrontBack(card.icon, card.altIcon));
  const $htmlCards = htmlCards.join('');

  return /*html*/ `
    <section class="board-game">
      ${$htmlCards}
    </section>
  `;
}