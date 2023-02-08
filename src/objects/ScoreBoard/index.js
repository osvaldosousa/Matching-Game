import './style.css';

import { PlayerName } from '../../components/PlayerName';
import { vsPlayer } from '../../components/VsPlayer';

export function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${PlayerName('Player Um')}
      ${vsPlayer()}
      ${PlayerName('Player Dois')}
    </header>
  `
}