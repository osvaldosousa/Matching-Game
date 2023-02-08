import './style.css';

import { PlayerName } from '../../components/PlayerName';
import { vsPlayer } from '../../components/VsPlayer';
import { PlayerScore } from '../../components/PlayerScore';

export function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${PlayerName('Player1')}
      ${PlayerScore()}
      ${vsPlayer()}
      ${PlayerScore()}
      ${PlayerName('Player2')}
    </header>
  `
}