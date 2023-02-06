import './style.css';

import { PlayerName } from '../../components/PlayerName';

export function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${PlayerName('Player Um')}
      ${PlayerName('Player Dois')}
    </header>
  `
}