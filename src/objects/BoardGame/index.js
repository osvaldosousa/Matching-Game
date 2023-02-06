import './style.css';
import { CardFrontBack } from "../../components/CardFrontBack";

export function BoardGame(amountCards) {
  const $htmlCardGame = CardFrontBack();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  return /*html*/ `
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `
}