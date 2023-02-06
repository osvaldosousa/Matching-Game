import './style.css';
import { CardGame } from "../../components/CardGame";

export function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  return `
    <section class="board-game">
      ${$htmlBoardGame}
    </section>
  `
}